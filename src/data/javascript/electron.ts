export const electronjs = {
  name: "Electron.js",
  import: "npm i electron",
  categories: [
    {
      title: "App Lifecycle",
      items: [
        { snippet: "app.whenReady().then(() => {\n  createWindow();\n});", desc: "Triggered when Electron has finished initialization and is ready to create browser windows." },
        { snippet: "app.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') app.quit();\n});", desc: "Quit the app when all windows are closed, except on macOS (darwin)." },
        { snippet: "app.on('activate', () => {\n  if (BrowserWindow.getAllWindows().length === 0) createWindow();\n});", desc: "Re-create a window when the dock icon is clicked and no other windows are open (macOS specific)." },
        { snippet: "app.quit();", desc: "Forcefully close all windows and exit the application." },
      ],
    },
    {
      title: "BrowserWindow Management",
      items: [
        { snippet: "const win = new BrowserWindow({\n  width: 800,\n  height: 600,\n  webPreferences: {\n    preload: path.join(__dirname, 'preload.js')\n  }\n});", desc: "Create a new application window with a preload script for secure IPC." },
        { snippet: "win.loadFile('index.html');", desc: "Load a local HTML file into the window." },
        { snippet: "win.loadURL('http://localhost:3000');", desc: "Load a remote URL into the window (useful during React/frontend development)." },
        { snippet: "win.webContents.openDevTools();", desc: "Open the Chromium Developer Tools for the window." },
        { snippet: "win.setMenu(null);", desc: "Remove the default top application menu bar." },
      ],
    },
    {
      title: "Context Bridge (Preload Script)",
      items: [
        { snippet: "const { contextBridge, ipcRenderer } = require('electron');", desc: "Import necessary modules in the preload script." },
        { snippet: "contextBridge.exposeInMainWorld('electronAPI', {\n  sendData: (data) => ipcRenderer.send('channel-name', data),\n  fetchData: () => ipcRenderer.invoke('fetch-channel')\n});", desc: "Securely expose specific IPC methods to the renderer process (frontend) via the window object." },
      ],
    },
    {
      title: "Inter-Process Communication (Main)",
      items: [
        { snippet: "ipcMain.on('channel-name', (event, data) => {\n  console.log(data);\n});", desc: "Listen for asynchronous messages from the renderer process." },
        { snippet: "ipcMain.handle('fetch-channel', async (event, args) => {\n  const result = await someAsyncFunction();\n  return result;\n});", desc: "Handle a request from the renderer and return a Promise (modern way for two-way communication)." },
        { snippet: "win.webContents.send('main-to-renderer', payload);", desc: "Send a message directly from the Main process to a specific Renderer window." },
      ],
    },
    {
      title: "Inter-Process Communication (Renderer)",
      items: [
        { snippet: "window.electronAPI.sendData('Hello Main!');", desc: "Send a message to the Main process using the exposed Context Bridge API." },
        { snippet: "const data = await window.electronAPI.fetchData();", desc: "Invoke a handler in the Main process and await the response." },
      ],
    },
    {
      title: "Native Desktop Elements",
      items: [
        { snippet: "const menu = Menu.buildFromTemplate(template);\nMenu.setApplicationMenu(menu);", desc: "Build and set a custom native application menu." },
        { snippet: "const tray = new Tray('/path/to/icon.png');\ntray.setToolTip('My App');\ntray.setContextMenu(Menu.buildFromTemplate([...]));", desc: "Create a system tray icon with a tooltip and context menu." },
        { snippet: "dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });", desc: "Open a native operating system file selection dialog." },
        { snippet: "new Notification({ title: 'Alert', body: 'Task finished!' }).show();", desc: "Trigger a native OS desktop notification." },
      ],
    },
    {
      title: "CLI & Scaffolding (Electron Forge)",
      items: [
        { snippet: "npx create-electron-app my-app", desc: "Scaffold a new Electron project using Electron Forge." },
        { snippet: "npm run start", desc: "Start the Electron application in development mode." },
        { snippet: "npm run make", desc: "Package and distribute the application for the host operating system." },
      ],
    },
  ],
};