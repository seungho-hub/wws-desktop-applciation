const { ipcRenderer } = require('electron');

const winControlChannel = '/wincontrol';

const winControl = (action) => {
  ipcRenderer.invoke(winControlChannel, action);
};

module.exports = {
  winControl,
};
