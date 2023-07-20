const { contextBridge } = require('electron');
const { ipcRenderer } = require('electron');

const channel = {
  winControl: '/wincontrol',
};

const winControl = (action) => {
  ipcRenderer.invoke(channel.winControl, action);
};

contextBridge.exposeInMainWorld('electronAPI', {
  winControl,
});
