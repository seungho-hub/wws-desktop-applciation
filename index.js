const { app, ipcMain } = require('electron');
const path = require('path');
const { createMainWindow } = require('./src/browsers');

const initialze = () => {
  const mainWindow = createMainWindow();
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

  mainWindow.loadFile(path.join(__dirname, 'wws-client/public/index.html'));

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });
};

app.whenReady().then(initialze);

app.on('windowcontrol', () => app.quit());
