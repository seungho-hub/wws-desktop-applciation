const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const windowWidth = 1280;
const windowHeight = 904;

const createWindow = () => {
  const window = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    show: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve('src/preload/preload.js'),
      sandbox: false,
    },
  });

  ipcMain.handle('/wincontrol', (e, action) => {
    switch (action) {
      case 'close':
        window.close();
        break;
      case 'minimize':
        window.minimize();
        break;
      case 'maximize':
        window.maximize();
        break;
      default:
    }
  });

  window.loadFile(path.resolve('wws-client/public/index.html'));

  window.webContents.on('did-finish-load', () => {
    window.show();
  });
};

app.whenReady().then(createWindow);

app.on('windowcontrol', () => app.quit());
