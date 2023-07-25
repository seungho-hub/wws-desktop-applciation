const { BrowserWindow } = require('electron');
const { mainBrowserConfig } = require('./browser.config');

const createMainWindow = () => new BrowserWindow(mainBrowserConfig);

module.exports = {
  createMainWindow,
};
