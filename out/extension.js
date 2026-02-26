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
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const panel_1 = require("./panel");
const index_1 = require("./data/index");
function activate(context) {
    console.log("DevLens extension is now active!");
    // Command: open cheat sheet panel
    const openCommand = vscode.commands.registerCommand("devLens.open", () => {
        panel_1.CheatSheetPanel.createOrShow(context.extensionUri);
    });
    // Command: open for a specific library
    const openLibraryCommand = vscode.commands.registerCommand("devLens.openLibrary", (libraryKey) => {
        panel_1.CheatSheetPanel.createOrShow(context.extensionUri, libraryKey);
    });
    // Auto-detect library when active editor changes
    const editorChangeListener = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (!editor || editor.document.languageId !== "python")
            return;
        if (!panel_1.CheatSheetPanel.currentPanel)
            return; // Only auto-switch if panel is open
        const text = editor.document.getText();
        detectAndSwitchLibrary(text);
    });
    // Also auto-detect when document content changes
    const docChangeListener = vscode.workspace.onDidChangeTextDocument((e) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document !== e.document)
            return;
        if (editor.document.languageId !== "python")
            return;
        if (!panel_1.CheatSheetPanel.currentPanel)
            return;
        // Debounce: only scan first 100 lines to keep it fast
        const text = e.document.getText(new vscode.Range(0, 0, Math.min(100, e.document.lineCount), 0));
        detectAndSwitchLibrary(text);
    });
    context.subscriptions.push(openCommand, openLibraryCommand, editorChangeListener, docChangeListener);
}
function detectAndSwitchLibrary(text) {
    for (const [importStr, libraryKey] of Object.entries(index_1.importDetectionMap)) {
        if (text.includes(importStr)) {
            panel_1.CheatSheetPanel.currentPanel?.switchLibrary(libraryKey);
            break;
        }
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map