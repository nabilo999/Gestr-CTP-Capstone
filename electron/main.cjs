const { app, BrowserWindow, Menu, session, screen } = require('electron');
const path = require('node:path');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const window = new BrowserWindow({
    title: 'GESTR',
    width: Math.min(1440, width - 40),
    height: Math.min(900, height - 40),
    minWidth: 960,
    minHeight: 640,
    show: false,
    backgroundColor: '#edf4ff',
    icon: path.join(__dirname, '../build/icon.ico'),
    titleBarStyle: 'hidden',
    titleBarOverlay: { color: '#dfe9f7', symbolColor: '#101a31', height: 43 },
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true },
  });
  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event) => event.preventDefault());
  window.once('ready-to-show', () => window.show());
  const devUrl = !app.isPackaged && process.env.GESTR_DEV_URL;
  if (devUrl && /^http:\/\/127\.0\.0\.1:\d+\/$/.test(devUrl)) {
    window.loadURL(devUrl);
  } else {
    window.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  // This prototype has no device access, even if a future UI change requests it.
  session.defaultSession.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
  session.defaultSession.setPermissionCheckHandler(() => false);
  createWindow();
});
app.on('window-all-closed', () => app.quit());
