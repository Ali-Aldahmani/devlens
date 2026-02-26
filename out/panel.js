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
        // If panel already exists, just reveal it
        if (CheatSheetPanel.currentPanel) {
            CheatSheetPanel.currentPanel._panel.reveal(vscode.ViewColumn.Beside);
            if (libraryKey) {
                CheatSheetPanel.currentPanel.switchLibrary(libraryKey);
            }
            return;
        }
        // Create a new panel beside the editor
        const panel = vscode.window.createWebviewPanel(CheatSheetPanel.viewType, "🐍 DevLens", vscode.ViewColumn.Beside, {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [
                vscode.Uri.joinPath(extensionUri, "media"),
            ],
        });
        CheatSheetPanel.currentPanel = new CheatSheetPanel(panel, extensionUri, libraryKey);
    }
    constructor(panel, extensionUri, libraryKey) {
        this._currentLibrary = "pandas";
        this._disposables = [];
        this._panel = panel;
        this._extensionUri = extensionUri;
        this._currentLibrary = libraryKey || "pandas";
        // Set initial HTML
        this._update();
        // Handle messages from the webview (e.g., insert snippet)
        this._panel.webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case "insertSnippet":
                    this._insertSnippet(message.snippet);
                    break;
                case "switchLibrary":
                    this._currentLibrary = message.library;
                    this._update();
                    break;
                case "copySnippet":
                    vscode.env.clipboard.writeText(message.snippet);
                    vscode.window.showInformationMessage("Snippet copied to clipboard!");
                    break;
            }
        }, null, this._disposables);
        // Clean up when panel is closed
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        // Track last active Python editor so INSERT works even when panel has focus
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            if (editor && editor.document.languageId === "python") {
                this._lastPythonEditor = editor;
            }
        }, null, this._disposables);
        // Set the current editor on open if it's already a Python file
        if (vscode.window.activeTextEditor?.document.languageId === "python") {
            this._lastPythonEditor = vscode.window.activeTextEditor;
        }
    }
    switchLibrary(libraryKey) {
        if (this._currentLibrary === libraryKey)
            return;
        this._currentLibrary = libraryKey;
        // Post message to webview to switch without full reload
        this._panel.webview.postMessage({
            command: "switchLibrary",
            library: libraryKey,
            data: index_1.libraries[libraryKey],
        });
    }
    _insertSnippet(snippet) {
        // Use active editor if it's Python, otherwise fall back to last known Python editor
        const editor = (vscode.window.activeTextEditor?.document.languageId === "python"
            ? vscode.window.activeTextEditor
            : undefined) ?? this._lastPythonEditor;
        if (!editor) {
            vscode.window.showWarningMessage("No active editor found. Open a Python file first.");
            return;
        }
        editor.edit((editBuilder) => {
            const position = editor.selection.active;
            editBuilder.insert(position, snippet);
        }).then(() => {
            // Return focus to the Python editor after inserting
            vscode.window.showTextDocument(editor.document, editor.viewColumn, false);
        });
    }
    _update() {
        this._panel.title = `🐍 ${index_1.libraries[this._currentLibrary]?.name ?? "Cheat Sheet"}`;
        this._panel.webview.html = this._getHtmlContent();
    }
    _getHtmlContent() {
        const libraryData = JSON.stringify(index_1.libraries);
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
    padding: 14px 16px 10px;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-shrink: 0;
  }

  .header-top {
    display: flex;
    align-items: center;
    gap: 10px;
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

  /* Language Selector */
  .lang-selector {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .lang-btn {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lang-btn:hover {
    border-color: var(--accent2);
    color: var(--accent2);
    background: #0f1a2e;
  }

  .lang-btn.active {
    background: #0f2a1e;
    border-color: var(--accent);
    color: var(--accent);
  }

  .lang-btn.coming-soon {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .lang-btn.coming-soon:hover {
    border-color: var(--border);
    color: var(--muted);
    background: transparent;
  }

  .badge {
    font-size: 10px;
    font-weight: 600;
    padding: 2px 7px;
    background: #1a2a1e;
    color: var(--accent);
    border: 1px solid #2a4a36;
    border-radius: 20px;
    letter-spacing: 0.08em;
  }

  /* Library Pills */
  .lib-pills {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .pill {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 600;
    padding: 5px 12px;
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
    padding: 6px 10px;
    background: #0a1a12;
    border: 1px solid #1a3a26;
    border-radius: var(--radius);
    margin-top: 10px;
  }

  .import-line code {
    font-family: var(--font-mono);
    font-size: 11.5px;
    color: var(--accent);
    flex: 1;
  }

  .copy-import {
    font-size: 10px;
    font-weight: 600;
    color: var(--muted);
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px 6px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color 0.15s;
  }

  .copy-import:hover { color: var(--accent); }

  /* ─── SEARCH ──────────────────────────────────── */
  .search-wrap {
    padding: 10px 16px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    background: var(--surface);
  }

  .search-input {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 7px 12px 7px 32px;
    outline: none;
    transition: border-color 0.15s;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px center;
  }

  .search-input:focus { border-color: var(--accent2); }
  .search-input::placeholder { color: var(--muted); }

  /* ─── CATEGORY TABS ───────────────────────────── */
  .tabs-wrap {
    padding: 8px 16px;
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
    flex-shrink: 0;
    background: var(--surface);
    scrollbar-width: none;
  }
  .tabs-wrap::-webkit-scrollbar { display: none; }

  .tabs {
    display: flex;
    gap: 4px;
    min-width: max-content;
  }

  .tab {
    font-family: var(--font-ui);
    font-size: 11px;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .tab:hover {
    background: var(--surface2);
    color: var(--text);
  }

  .tab.active {
    background: var(--surface2);
    color: var(--accent2);
    border-bottom: 2px solid var(--accent2);
  }

  /* ─── SNIPPET LIST ────────────────────────────── */
  .snippet-list {
    flex: 1;
    overflow-y: auto;
    padding: 12px 16px;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  .snippet-list::-webkit-scrollbar { width: 4px; }
  .snippet-list::-webkit-scrollbar-track { background: transparent; }
  .snippet-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .snippet-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    margin-bottom: 6px;
    overflow: hidden;
    transition: border-color 0.15s, transform 0.1s;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .snippet-card:hover {
    border-color: var(--border);
    transform: translateX(2px);
  }

  .snippet-desc {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    padding: 7px 10px 4px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 10px;
  }

  .snippet-code {
    font-family: var(--font-mono);
    font-size: 12px;
    color: #a5d6ff;
    padding: 0 10px 8px;
    line-height: 1.6;
    white-space: pre;
    overflow-x: auto;
  }

  .snippet-actions {
    display: flex;
    gap: 1px;
    border-top: 1px solid var(--border);
  }

  .snippet-btn {
    flex: 1;
    font-family: var(--font-ui);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 6px 0;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .snippet-btn.insert {
    color: var(--accent);
    border-right: 1px solid var(--border);
  }

  .snippet-btn.copy {
    color: var(--accent2);
  }

  .snippet-btn:hover {
    background: var(--surface2);
  }

  /* ─── EMPTY STATE ─────────────────────────────── */
  .empty {
    text-align: center;
    padding: 48px 16px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .empty-icon {
    font-size: 28px;
    margin-bottom: 12px;
    opacity: 0.5;
  }

  /* ─── STATUS BAR ──────────────────────────────── */
  .statusbar {
    padding: 5px 16px;
    border-top: 1px solid var(--border);
    background: var(--surface);
    font-size: 10px;
    color: var(--muted);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
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
    50% { opacity: 0.3; }
  }
</style>
</head>
<body>

<div class="header">
  <div class="header-top">
    <span class="logo">DevLens</span>
    <div class="lang-selector">
      <button class="lang-btn active" id="langPython" onclick="selectLanguage('python')" title="Python">
        🐍 Python
      </button>
      <button class="lang-btn coming-soon" title="Coming soon" onclick="showComingSoon('Git')">
        Git
      </button>
      <button class="lang-btn coming-soon" title="Coming soon" onclick="showComingSoon('Java')">
        Java
      </button>
      <button class="lang-btn coming-soon" title="Coming soon" onclick="showComingSoon('JavaScript')">
        JavaScript
      </button>
    </div>
  </div>
  <div class="lib-pills" id="libPills"></div>
  <div class="import-line">
    <code id="importLine"></code>
    <button class="copy-import" onclick="copyImport()">copy</button>
  </div>
</div>

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

<div class="tabs-wrap">
  <div class="tabs" id="tabs"></div>
</div>

<div class="snippet-list" id="snippetList"></div>

<div class="statusbar">
  <span id="countLabel">0 snippets</span>
  <span class="status-auto">
    <span class="dot"></span>
    Auto-detect on
  </span>
</div>

<script>
  const vscode = acquireVsCodeApi();

  // ── Data ──────────────────────────────────────────────
  const libraries = ${libraryData};
  let currentLib = "${currentLib}";
  let currentCategory = "all";
  let searchQuery = "";

  // ── Init ──────────────────────────────────────────────
  function init() {
    renderLibPills();
    renderTabs();
    renderSnippets();
    updateImportLine();
  }

  // ── Library Pills ─────────────────────────────────────
  function renderLibPills() {
    const container = document.getElementById("libPills");
    container.innerHTML = Object.entries(libraries).map(([key, lib]) => \`
      <button
        class="pill \${key === currentLib ? "active" : ""}"
        onclick="selectLib('\${key}')"
      >\${lib.name}</button>
    \`).join("");
  }

  function selectLib(key) {
    currentLib = key;
    currentCategory = "all";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    renderLibPills();
    renderTabs();
    renderSnippets();
    updateImportLine();
    vscode.postMessage({ command: "switchLibrary", library: key });
  }

  // ── Import Line ───────────────────────────────────────
  function updateImportLine() {
    document.getElementById("importLine").textContent = libraries[currentLib].import;
  }

  function copyImport() {
    vscode.postMessage({
      command: "copySnippet",
      snippet: libraries[currentLib].import
    });
  }

  // ── Tabs ──────────────────────────────────────────────
  function renderTabs() {
    const categories = libraries[currentLib].categories;
    const container = document.getElementById("tabs");
    container.innerHTML = [
      \`<button class="tab \${currentCategory === "all" ? "active" : ""}" onclick="selectCategory('all')">All</button>\`,
      ...categories.map(cat => \`
        <button
          class="tab \${currentCategory === cat.title ? "active" : ""}"
          onclick="selectCategory('\${cat.title}')"
        >\${cat.title}</button>
      \`)
    ].join("");
  }

  function selectCategory(title) {
    currentCategory = title;
    renderTabs();
    renderSnippets();
  }

  // ── Snippets ──────────────────────────────────────────
  function getFilteredSnippets() {
    const lib = libraries[currentLib];
    let items = [];

    lib.categories.forEach(cat => {
      if (currentCategory !== "all" && cat.title !== currentCategory) return;
      cat.items.forEach(item => {
        items.push({ ...item, category: cat.title });
      });
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

  function renderSnippets() {
    const items = getFilteredSnippets();
    const container = document.getElementById("snippetList");
    document.getElementById("countLabel").textContent = \`\${items.length} snippet\${items.length !== 1 ? "s" : ""}\`;

    if (items.length === 0) {
      container.innerHTML = \`
        <div class="empty">
          <div class="empty-icon">⚗️</div>
          No snippets found for "<strong>\${searchQuery}</strong>"
        </div>
      \`;
      return;
    }

    container.innerHTML = items.map((item, i) => \`
      <div class="snippet-card" style="animation-delay:\${i * 0.02}s">
        <div class="snippet-desc">\${item.desc}</div>
        <div class="snippet-code">\${escapeHtml(item.snippet)}</div>
        <div class="snippet-actions">
          <button class="snippet-btn insert" onclick="insertSnippet(\${i})">⌨ Insert</button>
          <button class="snippet-btn copy"   onclick="copySnippet(\${i})">⎘ Copy</button>
        </div>
      </div>
    \`).join("");

    // Store items for button handlers
    window._items = items;
  }

  function insertSnippet(index) {
    vscode.postMessage({ command: "insertSnippet", snippet: window._items[index].snippet });
  }

  function copySnippet(index) {
    vscode.postMessage({ command: "copySnippet", snippet: window._items[index].snippet });
  }

  // ── Search ────────────────────────────────────────────
  function handleSearch(value) {
    searchQuery = value;
    currentCategory = "all";
    renderTabs();
    renderSnippets();
  }

  // ── Messages from Extension ───────────────────────────
  window.addEventListener("message", (event) => {
    const msg = event.data;
    if (msg.command === "switchLibrary") {
      currentLib = msg.library;
      currentCategory = "all";
      searchQuery = "";
      document.getElementById("searchInput").value = "";
      renderLibPills();
      renderTabs();
      renderSnippets();
      updateImportLine();
    }
  });

  // ── Utils ─────────────────────────────────────────────
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ── Language Selector ─────────────────────────────────
  let currentLanguage = "python";

  function selectLanguage(lang) {
    if (lang !== "python") return; // Only Python for now
    currentLanguage = lang;
    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById("langPython").classList.add("active");
  }

  function showComingSoon(lang) {
    // Visual flash feedback on the button
    const btns = document.querySelectorAll(".lang-btn.coming-soon");
    btns.forEach(btn => {
      if (btn.textContent.trim() === lang) {
        btn.style.opacity = "0.6";
        btn.textContent = "Soon!";
        setTimeout(() => {
          btn.style.opacity = "0.35";
          btn.textContent = lang;
        }, 1000);
      }
    });
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