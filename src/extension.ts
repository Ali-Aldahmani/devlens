import * as vscode from "vscode";
import { CheatSheetPanel } from "./panel";
import { importDetectionMap } from "./data/index";

export function activate(context: vscode.ExtensionContext) {
  console.log("DevLens extension is now active!");

  // Command: open cheat sheet panel
  const openCommand = vscode.commands.registerCommand(
    "devLens.open",
    () => {
      CheatSheetPanel.createOrShow(context.extensionUri);
    }
  );

  // Command: open for a specific library
  const openLibraryCommand = vscode.commands.registerCommand(
    "devLens.openLibrary",
    (libraryKey: string) => {
      CheatSheetPanel.createOrShow(context.extensionUri, libraryKey);
    }
  );

  // Auto-detect library when active editor changes
  const editorChangeListener = vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      if (CheatSheetPanel.suppressAutoSwitch) return;
      if (!editor || editor.document.languageId !== "python") return;
      if (!CheatSheetPanel.currentPanel) return; // Only auto-switch if panel is open

      const text = editor.document.getText();
      detectAndSwitchLibrary(text);
    }
  );

  context.subscriptions.push(
    openCommand,
    openLibraryCommand,
    editorChangeListener
  );
}

function detectAndSwitchLibrary(text: string) {
  for (const [importStr, libraryKey] of Object.entries(importDetectionMap)) {
    if (text.includes(importStr)) {
      CheatSheetPanel.currentPanel?.switchLibrary(libraryKey);
      break;
    }
  }
}

export function deactivate() {}