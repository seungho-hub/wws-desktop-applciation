const { contextBridge } = require('electron');
const { ipcRenderer } = require('electron');

const channel = {
  winControl: '/wincontrol',
  login: '/login',
};

contextBridge.exposeInMainWorld('electronAPI', {
  winControl: (action) => ipcRenderer.invoke(channel.winControl, action),
  login: () => ipcRenderer.invoke(channel.login),
});
