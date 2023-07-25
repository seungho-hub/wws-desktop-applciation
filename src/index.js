const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const windowWidth = 1280;
const windowHeight = 904;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    show: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve('src/preload/preload.js'),
      sandbox: true,
    },
  });

  ipcMain.handle('/wincontrol', (e, action) => {
    switch (action) {
      case 'close':
        mainWindow.close();
        break;
      case 'minimize':
        mainWindow.minimize();
        break;
      case 'maximize':
        mainWindow.maximize();
        break;
      default:
    }
  });

  mainWindow.loadFile(path.resolve('wws-client/public/index.html'));

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });
};

app.whenReady().then(createWindow);

app.on('windowcontrol', () => app.quit());
