const path = require('path');

const defaultConfig = {
  show: false,
  transparent: true,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    sandbox: true,
    preload: path.join(__dirname, '../preload/preload.js'),
  },
};

const mainBrowserConfig = {
  ...defaultConfig,
  width: 1280,
  height: 904,
  frame: false,
};

module.exports = {
  mainBrowserConfig,
};
