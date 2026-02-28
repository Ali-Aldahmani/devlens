"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheatSheetPanel = void 0;
const vscode = __importStar(require("vscode"));
const index_1 = require("./data/index");
class CheatSheetPanel {
    static createOrShow(extensionUri, libraryKey) {
        if (CheatSheetPanel.currentPanel) {
            CheatSheetPanel.currentPanel._panel.reveal(vscode.ViewColumn.Beside);
            if (libraryKey) {
                CheatSheetPanel.currentPanel.switchLibrary(libraryKey);
            }
            return;
        }
        const panel = vscode.window.createWebviewPanel(CheatSheetPanel.viewType, "DevLens", vscode.ViewColumn.Beside, {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [vscode.Uri.joinPath(extensionUri, "media")],
        });
        CheatSheetPanel.currentPanel = new CheatSheetPanel(panel, extensionUri, libraryKey);
    }
    constructor(panel, extensionUri, libraryKey) {
        this._currentLibrary = "pandas";
        this._disposables = [];
        this._panel = panel;
        this._extensionUri = extensionUri;
        this._currentLibrary = libraryKey || "pandas";
        this._update();
        this._panel.webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case "insertSnippet":
                    this._insertSnippet(message.snippet, message.insertMode ?? "sameLine");
                    break;
                case "switchLibrary":
                    this._currentLibrary = message.library;
                    this._update();
                    break;
                case "copySnippet":
                    vscode.env.clipboard.writeText(message.snippet);
                    vscode.window.showInformationMessage("Snippet copied to clipboard!");
                    break;
                case "insertInTerminal":
                    this._insertInTerminal(message.snippet, message.execute ?? false);
                    break;
            }
        }, null, this._disposables);
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            if (editor && editor.document.languageId === "python") {
                this._lastPythonEditor = editor;
            }
        }, null, this._disposables);
        if (vscode.window.activeTextEditor?.document.languageId === "python") {
            this._lastPythonEditor = vscode.window.activeTextEditor;
        }
    }
    switchLibrary(libraryKey) {
        if (this._currentLibrary === libraryKey)
            return;
        this._currentLibrary = libraryKey;
        this._panel.webview.postMessage({
            command: "switchLibrary",
            library: libraryKey,
            data: index_1.libraries[libraryKey],
        });
    }
    _insertSnippet(snippet, insertMode = "sameLine") {
        const editor = (vscode.window.activeTextEditor?.document.languageId === "python"
            ? vscode.window.activeTextEditor
            : undefined) ?? this._lastPythonEditor;
        if (!editor) {
            vscode.window.showWarningMessage("No active editor found. Open a file first.");
            return;
        }
        editor.edit((editBuilder) => {
            if (insertMode === "newLine") {
                const line = editor.document.lineAt(editor.selection.active.line);
                editBuilder.insert(line.range.end, "\n" + snippet);
            }
            else {
                editBuilder.insert(editor.selection.active, snippet);
            }
        }).then(() => {
            vscode.window.showTextDocument(editor.document, editor.viewColumn, false);
        });
    }
    _insertInTerminal(snippet, execute = false) {
        let terminal = vscode.window.activeTerminal;
        if (!terminal) {
            terminal = vscode.window.createTerminal("DevLens");
        }
        terminal.show(true);
        terminal.sendText(snippet, execute);
    }
    _update() {
        this._panel.title = `${index_1.libraries[this._currentLibrary]?.name ?? "DevLens"}`;
        this._panel.webview.html = this._getHtmlContent();
    }
    _getHtmlContent() {
        const libraryDataB64 = Buffer.from(JSON.stringify(index_1.libraries), "utf8").toString("base64");
        const languageGroupsDataB64 = Buffer.from(JSON.stringify(index_1.languageGroups), "utf8").toString("base64");
        const currentLib = this._currentLibrary;
        return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>DevLens</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Syne:wght@500;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0d0f14;
    --surface:   #13161e;
    --surface2:  #1a1e29;
    --border:    #252a38;
    --accent:    #5dffb0;
    --accent2:   #4d8cff;
    --text:      #e2e8f0;
    --muted:     #64748b;
    --danger:    #ff5d87;
    --warn:      #ffb347;
    --radius:    8px;
    --font-mono: 'JetBrains Mono', monospace;
    --font-ui:   'Syne', sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-ui);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ─── HEADER ──────────────────────────────────── */
  .header {
    padding: 12px 14px 10px;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-shrink: 0;
  }

  .header-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .logo {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    flex: 1;
  }

  /* ─── VIEW MODE TOGGLE ────────────────────────── */
  .view-toggle {
    display: flex;
    gap: 2px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 2px;
  }

  .view-btn {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.03em;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .view-btn:hover { color: var(--text); }
  .view-btn.active {
    background: var(--surface);
    color: var(--accent);
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  /* ─── LANGUAGE PICKER ────────────────────────── */
  .lang-picker {
    position: relative;
  }

  .lang-picker-trigger {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--text);
    cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.04em;
    min-width: 130px;
    justify-content: space-between;
  }

  .lang-picker-trigger:hover { border-color: var(--accent2); }
  .lang-picker-trigger.open  { border-color: var(--accent); background: #0f2a1e; color: var(--accent); }

  .lang-picker-trigger .trigger-label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lang-picker-trigger .chevron {
    font-size: 8px;
    opacity: 0.5;
    transition: transform 0.15s ease;
  }

  .lang-picker-trigger.open .chevron { transform: rotate(180deg); }

  /* Dropdown panel */
  .lang-dropdown {
    display: none;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    right: 0;
    min-width: 220px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    z-index: 100;
    overflow: hidden;
  }

  .lang-dropdown.open { display: block; }

  /* Search inside dropdown */
  .lang-search-wrap {
    padding: 8px;
    border-bottom: 1px solid var(--border);
  }

  .lang-search {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 5px;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 11px;
    padding: 5px 8px 5px 26px;
    outline: none;
    transition: border-color 0.15s;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 8px center;
  }

  .lang-search:focus { border-color: var(--accent2); }
  .lang-search::placeholder { color: var(--muted); }

  /* Group headers inside dropdown */
  .lang-group-header {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 8px 12px 3px;
  }

  .lang-group-section { padding-bottom: 4px; }

  /* Individual language option */
  .lang-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    cursor: pointer;
    transition: background 0.1s ease;
    font-size: 12px;
    font-weight: 600;
  }

  .lang-option:hover { background: var(--surface2); }

  .lang-option.active {
    background: #0f2a1e;
    color: var(--accent);
  }

  .lang-option.coming-soon {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .lang-option.coming-soon:hover { background: transparent; }

  .lang-option-icon { font-size: 13px; width: 18px; text-align: center; }

  .lang-option-name { flex: 1; }

  .lang-option-badge {
    font-family: var(--font-mono);
    font-size: 8px;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 10px;
    background: #1a2a1e;
    color: var(--accent);
    border: 1px solid #2a4a36;
    letter-spacing: 0.06em;
  }

  .lang-option-badge.soon {
    background: #1a1a1a;
    color: var(--muted);
    border-color: var(--border);
  }

  .lang-no-results {
    padding: 12px;
    text-align: center;
    font-size: 11px;
    color: var(--muted);
    font-family: var(--font-mono);
    display: none;
  }

  /* ─── LIBRARY PILLS ───────────────────────────── */
  .lib-pills {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  .pill {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.03em;
  }

  .pill:hover {
    border-color: var(--accent2);
    color: var(--accent2);
    background: #0f1a2e;
  }

  .pill.active {
    background: #0f2a1e;
    border-color: var(--accent);
    color: var(--accent);
  }

  /* Import line */
  .import-line {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    background: #0a1a12;
    border: 1px solid #1a3a26;
    border-radius: var(--radius);
    margin-top: 8px;
  }

  .import-line code {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .copy-import {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2px 7px;
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .install-line {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  background: #0d1a2e;
  border: 1px solid #1a2a4a;
  border-radius: var(--radius);
  margin-top: 6px;
}

.install-line code {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent2); /* blue instead of green to distinguish from import */
  flex: 1;
}

.install-btn {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: #1a3a6a;
  border: 1px solid var(--accent2);
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.install-btn:hover { background: var(--accent2); color: var(--bg); }
  .copy-import:hover { color: var(--accent); border-color: var(--accent); }

  /* ─── SEARCH ──────────────────────────────────── */
  .search-wrap {
    padding: 8px 14px;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-shrink: 0;
  }

  .search-input {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 6px 10px 6px 30px;
    outline: none;
    transition: border-color 0.15s;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px center;
  }

  .search-input:focus { border-color: var(--accent2); }
  .search-input::placeholder { color: var(--muted); }

  /* ─── TABS ────────────────────────────────────── */
  .tabs-wrap {
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-shrink: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .tabs-wrap::-webkit-scrollbar { display: none; }

  .tabs {
    display: flex;
    gap: 0;
    padding: 0 14px;
  }

  .tab {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 7px 12px;
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    transition: all 0.15s ease;
  }

  .tab:hover { color: var(--text); }
  .tab.active { color: var(--accent); border-bottom-color: var(--accent); }

  /* ─── SNIPPET LIST (Cards View) ───────────────── */
  .snippet-list {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
    display: none;
  }

  .snippet-list.visible { display: block; }

  .snippet-list::-webkit-scrollbar { width: 4px; }
  .snippet-list::-webkit-scrollbar-track { background: transparent; }
  .snippet-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  .snippet-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 10px;
    margin-bottom: 6px;
    animation: slideIn 0.2s ease both;
    transition: border-color 0.15s ease;
  }

  .snippet-card:hover { border-color: var(--accent2); }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .snippet-desc {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }

  .snippet-code {
    font-family: var(--font-mono);
    font-size: 11.5px;
    line-height: 1.6;
    color: #a8d8b4;
    background: var(--bg);
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #1e2a20;
    white-space: pre;
    overflow-x: auto;
    margin-bottom: 8px;
    scrollbar-width: none;
  }

  .snippet-code::-webkit-scrollbar { display: none; }

  .snippet-actions {
    display: flex;
    gap: 6px;
  }

  .snippet-btn {
    flex: 1;
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.15s ease;
    background: transparent;
  }

  .snippet-btn.insert {
    color: var(--accent);
    border-color: #2a4a36;
    background: #0a1a12;
  }

  .snippet-btn.insert:hover {
    background: #0f2a1e;
    border-color: var(--accent);
  }

  .snippet-btn.copy {
    color: var(--accent2);
    border-color: #1a2a4a;
    background: #0a1020;
  }

  .snippet-btn.copy:hover {
    background: #0f1a38;
    border-color: var(--accent2);
  }

  /* ─── MARKDOWN VIEW ───────────────────────────── */
  .markdown-view {
    flex: 1;
    overflow-y: auto;
    padding: 16px 18px;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
    display: none;
    font-size: 13px;
    line-height: 1.7;
  }

  .markdown-view.visible { display: block; }

  .markdown-view::-webkit-scrollbar { width: 4px; }
  .markdown-view::-webkit-scrollbar-track { background: transparent; }
  .markdown-view::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  .md-lib-title {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--accent);
    margin-bottom: 4px;
  }

  .md-lib-import {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
    padding: 5px 10px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 5px;
    margin-bottom: 20px;
    display: inline-block;
  }

  .md-search-notice {
    font-size: 11px;
    color: var(--warn);
    font-family: var(--font-mono);
    padding: 6px 10px;
    background: #1a1400;
    border: 1px solid #3a2a00;
    border-radius: 5px;
    margin-bottom: 16px;
    display: none;
  }

  .md-search-notice.visible { display: block; }

  .md-category {
    margin-bottom: 24px;
    animation: slideIn 0.2s ease both;
  }

  .md-category-title {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent2);
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .md-category-title::before {
    content: '##';
    font-family: var(--font-mono);
    color: var(--border);
    font-size: 10px;
  }

  .md-item {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 8px;
    padding: 5px 0;
    border-bottom: 1px solid #1a1e29;
  }

  .md-item:last-child { border-bottom: none; }

  .md-item-left { min-width: 0; }

  .md-item-desc {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 3px;
  }

  .md-item-snippet {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: #7ec8a0;
    background: var(--bg);
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #1e2a20;
    white-space: pre;
    overflow-x: auto;
    display: block;
    scrollbar-width: none;
  }

  .md-item-snippet::-webkit-scrollbar { display: none; }

  .md-item-actions {
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex-shrink: 0;
  }

  .md-btn {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.12s ease;
    background: transparent;
    white-space: nowrap;
  }

  .md-btn.insert {
    color: var(--accent);
    border-color: #2a4a36;
    background: #0a1a12;
  }

  .md-btn.insert:hover { border-color: var(--accent); background: #0f2a1e; }

  .md-btn.copy {
    color: var(--accent2);
    border-color: #1a2a4a;
    background: #0a1020;
  }

  .md-btn.copy:hover { border-color: var(--accent2); background: #0f1a38; }

  /* ─── EMPTY STATE ─────────────────────────────── */
  .empty {
    text-align: center;
    padding: 40px 16px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .empty-icon { font-size: 24px; margin-bottom: 10px; opacity: 0.5; }

  /* ─── STATUS BAR ──────────────────────────────── */
  .statusbar {
    padding: 5px 14px;
    border-top: 1px solid var(--border);
    background: var(--surface);
    font-size: 10px;
    color: var(--muted);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
  }

  .status-auto {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  .md-highlight {
    background: rgba(93, 255, 176, 0.15);
    border-radius: 2px;
    padding: 0 1px;
  }

  /* ─── FAVORITES ───────────────────────────────── */
  .fav-btn {
    font-size: 14px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
    padding: 0;
    line-height: 1;
  }

  .fav-btn:hover { color: var(--warn); border-color: var(--warn); background: #1a1200; }
  .fav-btn.active { color: var(--warn); border-color: #3a2a00; background: #1a1200; }

  .md-btn.fav { color: var(--muted); border-color: var(--border); background: transparent; }
  .md-btn.fav:hover { color: var(--warn); border-color: var(--warn); background: #1a1200; }
  .md-btn.fav.active { color: var(--warn); border-color: #3a2a00; background: #1a1200; }

  .favs-view {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
    display: none;
  }

  .favs-view.visible { display: block; }
  .favs-view::-webkit-scrollbar { width: 4px; }
  .favs-view::-webkit-scrollbar-track { background: transparent; }
  .favs-view::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  .fav-group-title {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--warn);
    padding-bottom: 4px;
    margin-bottom: 6px;
    margin-top: 10px;
    border-bottom: 1px solid var(--border);
  }

  .fav-group-title:first-child { margin-top: 0; }

  /* ─── SETTINGS ────────────────────────────────── */
  .settings-anchor {
    position: relative;
  }

  .settings-btn {
    font-size: 13px;
    padding: 3px 7px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    line-height: 1;
  }

  .settings-btn:hover { color: var(--text); border-color: var(--accent2); }
  .settings-btn.open  { color: var(--accent); border-color: var(--accent); background: #0f2a1e; }

  .settings-panel {
    display: none;
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 230px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    z-index: 200;
    padding: 12px;
  }

  .settings-panel.open { display: block; }

  .settings-title {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .settings-item { margin-bottom: 0; }

  .settings-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 6px;
    display: block;
    letter-spacing: 0.02em;
  }

  .settings-label small {
    display: block;
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    margin-top: 1px;
    letter-spacing: 0;
  }

  .settings-toggle {
    display: flex;
    gap: 2px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 2px;
  }

  .settings-toggle-btn {
    flex: 1;
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.03em;
  }

  .settings-toggle-btn:hover { color: var(--text); }

  .settings-toggle-btn.active {
    background: var(--surface);
    color: var(--accent);
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
</style>
</head>
<body>

<!-- ─── HEADER ──────────────────────────────────── -->
<div class="header">
  <div class="header-top">
    <span class="logo">DevLens</span>

    <!-- Language picker dropdown -->
    <div class="lang-picker" id="langPicker">
      <button class="lang-picker-trigger" id="langPickerTrigger" onclick="toggleLangDropdown()">
        <span class="trigger-label" id="triggerLabel">🐍 Python</span>
        <span class="chevron">▼</span>
      </button>
      <div class="lang-dropdown" id="langDropdown">
        <div class="lang-search-wrap">
          <input
            class="lang-search"
            id="langSearch"
            placeholder="Search languages..."
            oninput="filterLangOptions(this.value)"
            autocomplete="off"
            spellcheck="false"
          />
        </div>
        <div id="langOptionsList"></div>
        <div class="lang-no-results" id="langNoResults">No results</div>
      </div>
    </div>

    <!-- View mode toggle -->
    <div class="view-toggle">
      <button class="view-btn active" id="viewCards" onclick="setViewMode('cards')" title="Card view">
        ☰ Cards
      </button>
      <button class="view-btn" id="viewMarkdown" onclick="setViewMode('markdown')" title="Markdown reference view">
        ⊞ Markdown
      </button>
      <button class="view-btn" id="viewFavs" onclick="setViewMode('favs')" title="Favorites">
        ★ Favs
      </button>
    </div>

    <!-- Settings -->
    <div class="settings-anchor">
      <button class="settings-btn" id="settingsBtn" onclick="toggleSettings()" title="Settings">⚙</button>
      <div class="settings-panel" id="settingsPanel">
        <div class="settings-title">⚙ Settings</div>
        <div class="settings-item">
          <span class="settings-label">
            Insert Position
            <small>Where snippets land when you click Insert</small>
          </span>
          <div class="settings-toggle">
            <button class="settings-toggle-btn" id="settingsSameLine" onclick="setInsertMode('sameLine')">Same Line</button>
            <button class="settings-toggle-btn" id="settingsNewLine"  onclick="setInsertMode('newLine')">New Line</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Library pills for current group -->
  <div class="lib-pills" id="libPills"></div>

  <!-- Import line -->
  <div class="import-line">
    <code id="importLine"></code>
    <button class="copy-import" onclick="copyImport()">copy</button>
  </div>

  <div class="install-line" id="installLine" style="display:none">
  <code id="installCmd"></code>
  <button class="install-btn" onclick="runInstall()">▶ Install in Terminal</button>
</div>
</div>

<!-- ─── SEARCH ──────────────────────────────────── -->
<div class="search-wrap">
  <input
    class="search-input"
    id="searchInput"
    placeholder="Search snippets..."
    oninput="handleSearch(this.value)"
    autocomplete="off"
    spellcheck="false"
  />
</div>

<!-- ─── CATEGORY TABS ───────────────────────────── -->
<div class="tabs-wrap" id="tabsWrap">
  <div class="tabs" id="tabs"></div>
</div>

<!-- ─── CARDS VIEW ──────────────────────────────── -->
<div class="snippet-list visible" id="snippetList"></div>

<!-- ─── MARKDOWN VIEW ───────────────────────────── -->
<div class="markdown-view" id="markdownView"></div>

<!-- ─── FAVORITES VIEW ──────────────────────────── -->
<div class="favs-view" id="favsView"></div>

<!-- ─── STATUS BAR ──────────────────────────────── -->
<div class="statusbar">
  <span id="countLabel">0 snippets</span>
  <span class="status-auto">
    <span class="dot"></span>
    Auto-detect on
  </span>
</div>

<script>
  const vscode = acquireVsCodeApi();

  // ─── Data ────────────────────────────────────────────
  const libraries = JSON.parse(atob("${libraryDataB64}"));
  const languageGroups = JSON.parse(atob("${languageGroupsDataB64}"));

  let currentLib = "${currentLib}";
  let currentCategory = "all";
  let currentLangGroup = null;
  let searchQuery = "";
  let viewMode = "cards"; // "cards" | "markdown" | "favs"
  let favorites = []; // { libKey, snippet, desc, category }
  let insertMode = (function() {
    try { return localStorage.getItem("devlens_insertMode") || "sameLine"; } catch(e) { return "sameLine"; }
  })(); // "sameLine" | "newLine"

  // Determine initial lang group from currentLib
  function initLangGroup() {
    for (const group of languageGroups) {
      if (group.libraries.includes(currentLib)) {
        currentLangGroup = group.label;
        return;
      }
    }
    currentLangGroup = languageGroups[0].label;
  }

  // ─── Settings ────────────────────────────────────────
  let settingsOpen = false;

  function toggleSettings() {
    settingsOpen = !settingsOpen;
    document.getElementById("settingsPanel").classList.toggle("open", settingsOpen);
    document.getElementById("settingsBtn").classList.toggle("open", settingsOpen);
  }

  function closeSettings() {
    settingsOpen = false;
    document.getElementById("settingsPanel").classList.remove("open");
    document.getElementById("settingsBtn").classList.remove("open");
  }

  function setInsertMode(mode) {
    insertMode = mode;
    try { localStorage.setItem("devlens_insertMode", mode); } catch(e) {}
    document.getElementById("settingsSameLine").classList.toggle("active", mode === "sameLine");
    document.getElementById("settingsNewLine").classList.toggle("active", mode === "newLine");
  }

  function initSettings() {
    setInsertMode(insertMode);
  }

  // ─── Init ────────────────────────────────────────────
  function init() {
    initLangGroup();
    initSettings();
    loadFavorites();
    updateTriggerLabel();
    renderLibPills();
    renderTabs();
    renderContent();
    updateImportLine();
    updateInstallLine();
  }

  // ─── Language Picker Dropdown ────────────────────────
  const comingSoonLangs = [
    { label: "JavaScript", icon: "JS", group: "Web Dev" },
    { label: "TypeScript", icon: "TS", group: "Web Dev" },
    { label: "Java",       icon: "☕", group: "Backend" },
    { label: "Rust",       icon: "🦀", group: "Systems" },
    { label: "Go",         icon: "🐹", group: "Backend" },
  ];

  let langDropdownOpen = false;

  function toggleLangDropdown() {
    langDropdownOpen = !langDropdownOpen;
    document.getElementById("langDropdown").classList.toggle("open", langDropdownOpen);
    document.getElementById("langPickerTrigger").classList.toggle("open", langDropdownOpen);
    if (langDropdownOpen) {
      renderLangOptions("");
      setTimeout(() => document.getElementById("langSearch").focus(), 50);
    }
  }

  function closeLangDropdown() {
    langDropdownOpen = false;
    document.getElementById("langDropdown").classList.remove("open");
    document.getElementById("langPickerTrigger").classList.remove("open");
    document.getElementById("langSearch").value = "";
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", function(e) {
    const picker = document.getElementById("langPicker");
    if (!picker.contains(e.target)) closeLangDropdown();

    const settingsBtn = document.getElementById("settingsBtn");
    const settingsPanel = document.getElementById("settingsPanel");
    if (settingsOpen && settingsBtn && settingsPanel &&
        !settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
      closeSettings();
    }
  });

  function filterLangOptions(query) {
    renderLangOptions(query);
  }

  function renderLangOptions(query) {
    const container = document.getElementById("langOptionsList");
    const noResults = document.getElementById("langNoResults");
    const q = query.toLowerCase();

    // Build sections: active language groups first, then coming soon
    let html = "";
    let totalVisible = 0;

    // Group active langs by their group label
    const groupMap = {};
    languageGroups.forEach(group => {
      group.libraries.forEach(key => {
        const lib = libraries[key];
        const name = lib.name;
        if (q && !name.toLowerCase().includes(q) && !group.label.toLowerCase().includes(q) && !key.toLowerCase().includes(q)) return;
        if (!groupMap[group.label]) groupMap[group.label] = { icon: group.icon, items: [] };
        groupMap[group.label].items.push({ key, name, icon: group.icon });
        totalVisible++;
      });
    });

    Object.entries(groupMap).forEach(([groupLabel, groupData]) => {
      html += \`<div class="lang-group-section">\`;
      html += \`<div class="lang-group-header">\${groupData.icon} \${groupLabel}</div>\`;
      groupData.items.forEach(item => {
        const isActive = item.key === currentLib;
        const count = libraries[item.key].categories.reduce((s, c) => s + c.items.length, 0);
        html += \`
          <div class="lang-option \${isActive ? 'active' : ''}" onclick="selectLibFromDropdown('\${item.key}')">
            <span class="lang-option-name">\${item.name}</span>
            <span class="lang-option-badge">\${count} snippets</span>
          </div>
        \`;
      });
      html += \`</div>\`;
    });

    // Coming soon section
    const comingFiltered = comingSoonLangs.filter(l =>
      !q || l.label.toLowerCase().includes(q) || l.group.toLowerCase().includes(q)
    );
    if (comingFiltered.length > 0) {
      html += \`<div class="lang-group-section">\`;
      html += \`<div class="lang-group-header">⏳ Coming Soon</div>\`;
      comingFiltered.forEach(l => {
        totalVisible++;
        html += \`
          <div class="lang-option coming-soon">
            <span class="lang-option-name">\${l.icon} \${l.label}</span>
            <span class="lang-option-badge soon">soon</span>
          </div>
        \`;
      });
      html += \`</div>\`;
    }

    container.innerHTML = html;
    noResults.style.display = totalVisible === 0 ? "block" : "none";
  }

  function selectLibFromDropdown(key) {
    // Find which group this lib belongs to
    for (const group of languageGroups) {
      if (group.libraries.includes(key)) {
        currentLangGroup = group.label;
        break;
      }
    }
    currentLib = key;
    currentCategory = "all";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    closeLangDropdown();
    updateTriggerLabel();
    renderLibPills();
    renderTabs();
    renderContent();
    updateImportLine();
    updateInstallLine()
    vscode.postMessage({ command: "switchLibrary", library: key });
  }

  function updateTriggerLabel() {
    const group = languageGroups.find(g => g.libraries.includes(currentLib));
    const libName = libraries[currentLib].name;
    document.getElementById("triggerLabel").textContent = (group ? group.icon + " " : "") + libName;
  }

  // Legacy — kept for init compat
  function selectLangGroup(label) {
    const group = languageGroups.find(g => g.label === label);
    if (!group) return;
    selectLibFromDropdown(group.libraries[0]);
  }

  // ─── Library Pills ───────────────────────────────────
  function renderLibPills() {
    const group = languageGroups.find(g => g.label === currentLangGroup);
    if (!group) return;
    const container = document.getElementById("libPills");
    container.innerHTML = group.libraries.map(key => \`
      <button
        class="pill \${key === currentLib ? 'active' : ''}"
        onclick="selectLib('\${key}')"
      >\${libraries[key].name}</button>
    \`).join("");
  }

  function selectLib(key) {
    currentLib = key;
    currentCategory = "all";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    renderLibPills();
    renderTabs();
    renderContent();
    updateImportLine();
    updateInstallLine()
    vscode.postMessage({ command: "switchLibrary", library: key });
  }

  // ─── Import Line ─────────────────────────────────────
  function updateImportLine() {
    document.getElementById("importLine").textContent = libraries[currentLib].import;
  }

  function updateInstallLine() {
  const lib = libraries[currentLib];
  const installLine = document.getElementById("installLine");
  const installCmd = document.getElementById("installCmd");

  if (lib.install) {
    installCmd.textContent = lib.install;
    installLine.style.display = "flex";
  } else {
    installLine.style.display = "none"; // hide for Web/Tools libs
  }
}

function getInsertTarget() {
  return libraries[currentLib].insertTarget || "editor";
}

function runInstall() {
  const lib = libraries[currentLib];
  if (lib.install) {
    vscode.postMessage({ command: "insertInTerminal", snippet: lib.install, execute: true });
  }
}

  function copyImport() {
    vscode.postMessage({ command: "copySnippet", snippet: libraries[currentLib].import });
  }

  // ─── Tabs ────────────────────────────────────────────
  function renderTabs() {
    // Hide tabs in markdown and favs mode
    const tabsWrap = document.getElementById("tabsWrap");
    if (viewMode === "markdown" || viewMode === "favs") {
      tabsWrap.style.display = "none";
      return;
    }
    tabsWrap.style.display = "";

    const categories = libraries[currentLib].categories;
    const container = document.getElementById("tabs");
    container.innerHTML = [
      \`<button class="tab \${currentCategory === 'all' ? 'active' : ''}" onclick="selectCategory('all')">All</button>\`,
      ...categories.map(cat => \`
        <button
          class="tab \${currentCategory === cat.title ? 'active' : ''}"
          onclick="selectCategory('\${cat.title}')"
        >\${cat.title}</button>
      \`)
    ].join("");
  }

  function selectCategory(title) {
    currentCategory = title;
    renderTabs();
    renderContent();
  }

  // ─── View Mode ───────────────────────────────────────
  function setViewMode(mode) {
    viewMode = mode;
    document.getElementById("viewCards").classList.toggle("active", mode === "cards");
    document.getElementById("viewMarkdown").classList.toggle("active", mode === "markdown");
    document.getElementById("viewFavs").classList.toggle("active", mode === "favs");
    renderTabs();
    renderContent();
  }

  // ─── Render dispatcher ───────────────────────────────
  function renderContent() {
    document.getElementById("snippetList").classList.toggle("visible", viewMode === "cards");
    document.getElementById("markdownView").classList.toggle("visible", viewMode === "markdown");
    document.getElementById("favsView").classList.toggle("visible", viewMode === "favs");
    if (viewMode === "cards") renderCards();
    else if (viewMode === "markdown") renderMarkdown();
    else renderFavoritesView();
  }

  // ─── Filtered items ──────────────────────────────────
  function getFilteredItems() {
    const lib = libraries[currentLib];
    let items = [];
    lib.categories.forEach(cat => {
      if (currentCategory !== "all" && cat.title !== currentCategory) return;
      cat.items.forEach(item => items.push({ ...item, category: cat.title }));
    });
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i =>
        i.snippet.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q)
      );
    }
    return items;
  }

  function getFilteredCategories() {
    const lib = libraries[currentLib];
    if (!searchQuery && currentCategory === "all") return lib.categories;
    return lib.categories
      .filter(cat => currentCategory === "all" || cat.title === currentCategory)
      .map(cat => {
        if (!searchQuery) return cat;
        const q = searchQuery.toLowerCase();
        return {
          ...cat,
          items: cat.items.filter(i =>
            i.snippet.toLowerCase().includes(q) ||
            i.desc.toLowerCase().includes(q)
          )
        };
      })
      .filter(cat => cat.items.length > 0);
  }

  // ─── Cards View ──────────────────────────────────────
  function renderCards() {
    const items = getFilteredItems();
    const container = document.getElementById("snippetList");
    const isTerminal = getInsertTarget() === "terminal";
    const insertLabel = isTerminal ? "⌨ Send to Terminal" : "⌨ Insert";

    document.getElementById("countLabel").textContent = \`\${items.length} snippet\${items.length !== 1 ? "s" : ""}\`;

    if (items.length === 0) {
      container.innerHTML = \`
        <div class="empty">
          <div class="empty-icon">⚗️</div>
          No snippets found for "<strong>\${escapeHtml(searchQuery)}</strong>"
        </div>
      \`;
      return;
    }

    container.innerHTML = items.map((item, i) => \`
      <div class="snippet-card" style="animation-delay:\${Math.min(i * 0.02, 0.3)}s">
        <div class="snippet-desc">\${escapeHtml(item.desc)}</div>
        <div class="snippet-code">\${highlight(escapeHtml(item.snippet))}</div>
        <div class="snippet-actions">
          <button class="snippet-btn insert" onclick="insertSnippet(\${i})">\${getInsertTarget() === 'terminal' ? '⌨ Send to Terminal' : '⌨ Insert'}</button>
          <button class="snippet-btn copy"   onclick="copySnippet(\${i})">⎘ Copy</button>
          <button class="fav-btn \${isFavorite(currentLib, item) ? 'active' : ''}" onclick="toggleFavorite(currentLib, \${i})" title="\${isFavorite(currentLib, item) ? 'Remove from favorites' : 'Add to favorites'}">★</button>
        </div>
      </div>
    \`).join("");

    window._items = items;
  }

  // ─── Markdown View ───────────────────────────────────
  function renderMarkdown() {
    const lib = libraries[currentLib];
    const categories = getFilteredCategories();
    const container = document.getElementById("markdownView");

    let totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
    document.getElementById("countLabel").textContent = \`\${totalItems} snippet\${totalItems !== 1 ? "s" : ""}\`;

    let html = \`
      <div class="md-lib-title"># \${lib.name}</div>
      <code class="md-lib-import">\${escapeHtml(lib.import)}</code>
    \`;

    if (searchQuery) {
      html += \`<div class="md-search-notice visible">🔍 Showing results for "\${escapeHtml(searchQuery)}"</div>\`;
    } else {
      html += \`<div class="md-search-notice"></div>\`;
    }

    if (categories.length === 0) {
      html += \`<div class="empty"><div class="empty-icon">⚗️</div>No snippets found for "<strong>\${escapeHtml(searchQuery)}</strong>"</div>\`;
    } else {
      categories.forEach((cat, ci) => {
        if (cat.items.length === 0) return;
        html += \`<div class="md-category" style="animation-delay:\${ci * 0.04}s">\`;
        html += \`<div class="md-category-title">\${escapeHtml(cat.title)}</div>\`;
        cat.items.forEach((item, ii) => {
          const globalIdx = \`md_\${ci}_\${ii}\`;
          html += \`
            <div class="md-item">
              <div class="md-item-left">
                <div class="md-item-desc">\${highlightText(escapeHtml(item.desc))}</div>
                <code class="md-item-snippet">\${highlightText(escapeHtml(item.snippet))}</code>
              </div>
              <div class="md-item-actions">
                <button class="md-btn insert" onclick="insertSnippetMd('\${globalIdx}')">⌨ Insert</button>
                <button class="md-btn copy"   onclick="copySnippetMd('\${globalIdx}')">⎘ Copy</button>
                <button class="md-btn fav \${isFavorite(currentLib, item) ? 'active' : ''}" onclick="toggleFavoriteMd('\${globalIdx}')" title="\${isFavorite(currentLib, item) ? 'Remove from favorites' : 'Add to favorites'}">★</button>
              </div>
            </div>
          \`;
          // Store for handlers
          window._mdItems = window._mdItems || {};
          window._mdItems[globalIdx] = item;
        });
        html += \`</div>\`;
      });
    }

    container.innerHTML = html;

    // Re-store all items for handlers (after innerHTML is set)
    window._mdItems = {};
    categories.forEach((cat, ci) => {
      cat.items.forEach((item, ii) => {
        window._mdItems[\`md_\${ci}_\${ii}\`] = item;
      });
    });
  }

  function insertSnippet(index) {
  const snippet = window._items[index].snippet;
  const cmd = getInsertTarget() === "terminal" ? "insertInTerminal" : "insertSnippet";
  vscode.postMessage({ command: cmd, snippet, execute: false, insertMode });
}

function insertSnippetMd(idx) {
  const item = window._mdItems?.[idx];
  if (!item) return;
  const cmd = getInsertTarget() === "terminal" ? "insertInTerminal" : "insertSnippet";
  vscode.postMessage({ command: cmd, snippet: item.snippet, execute: false, insertMode });
}

  function copySnippet(index) {
    vscode.postMessage({ command: "copySnippet", snippet: window._items[index].snippet });
  }

  function copySnippetMd(idx) {
    const item = window._mdItems?.[idx];
    if (!item) return;
    vscode.postMessage({ command: "copySnippet", snippet: item.snippet });
  }

  // ─── Favorites ───────────────────────────────────────
  function loadFavorites() {
    try {
      const stored = localStorage.getItem("devlens_favorites");
      favorites = stored ? JSON.parse(stored) : [];
    } catch (e) { favorites = []; }
  }

  function saveFavorites() {
    try { localStorage.setItem("devlens_favorites", JSON.stringify(favorites)); } catch(e) {}
  }

  function favKey(libKey, snippet) {
    return libKey + "||" + snippet;
  }

  function isFavorite(libKey, item) {
    const key = favKey(libKey, item.snippet);
    return favorites.some(f => favKey(f.libKey, f.snippet) === key);
  }

  function toggleFavorite(libKey, index) {
    const item = window._items[index];
    if (!item) return;
    const key = favKey(libKey, item.snippet);
    const idx = favorites.findIndex(f => favKey(f.libKey, f.snippet) === key);
    if (idx !== -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push({ libKey, snippet: item.snippet, desc: item.desc, category: item.category || "" });
    }
    saveFavorites();
    renderContent();
  }

  function toggleFavoriteMd(globalIdx) {
    const item = window._mdItems?.[globalIdx];
    if (!item) return;
    const key = favKey(currentLib, item.snippet);
    const idx = favorites.findIndex(f => favKey(f.libKey, f.snippet) === key);
    if (idx !== -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push({ libKey: currentLib, snippet: item.snippet, desc: item.desc, category: item.category || "" });
    }
    saveFavorites();
    renderContent();
  }

  function toggleFavoriteFav(favIndex) {
    favorites.splice(favIndex, 1);
    saveFavorites();
    renderFavoritesView();
  }

  function insertFavSnippet(favIndex) {
    const item = favorites[favIndex];
    if (!item) return;
    const isTerminal = libraries[item.libKey]?.insertTarget === "terminal";
    const cmd = isTerminal ? "insertInTerminal" : "insertSnippet";
    vscode.postMessage({ command: cmd, snippet: item.snippet, execute: false, insertMode });
  }

  function copyFavSnippet(favIndex) {
    const item = favorites[favIndex];
    if (!item) return;
    vscode.postMessage({ command: "copySnippet", snippet: item.snippet });
  }

  function renderFavoritesView() {
    const container = document.getElementById("favsView");

    let filtered = favorites;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = favorites.filter(f =>
        f.snippet.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q)
      );
    }

    document.getElementById("countLabel").textContent =
      \`\${filtered.length} favorite\${filtered.length !== 1 ? "s" : ""}\`;

    if (favorites.length === 0) {
      container.innerHTML = \`
        <div class="empty">
          <div class="empty-icon">★</div>
          No favorites yet.
          <br/>
          <span style="font-size:11px;font-weight:400;opacity:0.7">Click ★ on any snippet to save it here.</span>
        </div>
      \`;
      return;
    }

    if (filtered.length === 0) {
      container.innerHTML = \`
        <div class="empty">
          <div class="empty-icon">⚗️</div>
          No favorites match "<strong>\${escapeHtml(searchQuery)}</strong>"
        </div>
      \`;
      return;
    }

    const groups = {};
    filtered.forEach(fav => {
      const origIdx = favorites.indexOf(fav);
      if (!groups[fav.libKey]) groups[fav.libKey] = [];
      groups[fav.libKey].push({ ...fav, favIndex: origIdx });
    });

    let html = "";
    Object.entries(groups).forEach(([libKey, items]) => {
      const libName = libraries[libKey]?.name || libKey;
      const isTerminal = libraries[libKey]?.insertTarget === "terminal";
      html += \`<div class="fav-group-title">\${escapeHtml(libName)}</div>\`;
      items.forEach((item, i) => {
        html += \`
          <div class="snippet-card" style="animation-delay:\${Math.min(i * 0.02, 0.3)}s">
            <div class="snippet-desc">\${escapeHtml(item.desc)}</div>
            <div class="snippet-code">\${escapeHtml(item.snippet)}</div>
            <div class="snippet-actions">
              <button class="snippet-btn insert" onclick="insertFavSnippet(\${item.favIndex})">\${isTerminal ? '⌨ Send to Terminal' : '⌨ Insert'}</button>
              <button class="snippet-btn copy"   onclick="copyFavSnippet(\${item.favIndex})">⎘ Copy</button>
              <button class="fav-btn active" onclick="toggleFavoriteFav(\${item.favIndex})" title="Remove from favorites">★</button>
            </div>
          </div>
        \`;
      });
    });

    container.innerHTML = html;
  }

  // ─── Search ──────────────────────────────────────────
  function handleSearch(value) {
    searchQuery = value;
    currentCategory = "all";
    renderTabs();
    renderContent();
  }

  // ─── Messages from Extension ─────────────────────────
  window.addEventListener("message", (event) => {
    const msg = event.data;
    if (msg.command === "switchLibrary") {
      currentLib = msg.library;
      currentCategory = "all";
      searchQuery = "";
      document.getElementById("searchInput").value = "";
      // Update lang group to match
      for (const group of languageGroups) {
        if (group.libraries.includes(currentLib)) {
          currentLangGroup = group.label;
          break;
        }
      }
      updateTriggerLabel();
      renderLibPills();
      renderTabs();
      renderContent();
      updateImportLine();
      updateInstallLine();
    }
  });

  // ─── Highlight search term in text ───────────────────
  function highlightText(str) {
    if (!searchQuery) return str;
    const q = escapeRegex(searchQuery.toLowerCase());
    return str.replace(new RegExp(\`(\${q})\`, "gi"), '<span class="md-highlight">$1</span>');
  }

  function highlight(str) {
    return str; // In cards view no inline highlight needed for code
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeRegex(str) {
    return str.split('').map(function(c) {
      return '[\\\\^$.|?*+(){}'.indexOf(c) !== -1 ? '\\\\' + c : c;
    }).join('');
  }

  init();
</script>
</body>
</html>`;
    }
    dispose() {
        CheatSheetPanel.currentPanel = undefined;
        this._panel.dispose();
        this._disposables.forEach((d) => d.dispose());
        this._disposables = [];
    }
}
exports.CheatSheetPanel = CheatSheetPanel;
CheatSheetPanel.viewType = "devLens";
//# sourceMappingURL=panel.js.map