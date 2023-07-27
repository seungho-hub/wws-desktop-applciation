const { app, ipcMain, dialog } = require('electron');
const path = require('path');
const opener = require('opener');
const { createMainWindow } = require('./src/browsers');

const appProtocol = process.env.NODE_ENV === 'production' ? 'wwsp' : 'wwsp-dev';

const initialize = () => {
  const mainWindow = createMainWindow();

  if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient(appProtocol, process.execPath, [
        path.resolve(process.argv[1]),
      ]);
    }
  } else {
    app.setAsDefaultProtocolClient(appProtocol);
  }

  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
  } else {
    app.on('second-instance', (event, commandLine) => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore();
        }

        mainWindow.focus();
      }

      const url = new URL(commandLine.pop());

      const jwt = url.searchParams.get('jwt');

      mainWindow.webContents.send('/jwt', jwt);
    });
  }

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

  ipcMain.handle('/login', () => {
    opener(`http://localhost:8080/auth/signin?redirect_uri=${appProtocol}://`);
  });

  mainWindow.loadFile(path.join(__dirname, 'wws-client/public/index.html'));

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });
};

app.on('open-url', (event, url) => {
  dialog.showErrorBox('WelcomBack', 'you arrived from', url);
});

app.whenReady().then(initialize);

app.on('windowcontrol', () => app.quit());
