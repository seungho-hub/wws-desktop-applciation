const { contextBridge } = require('electron');
const { ipcRenderer } = require('electron');

const channel = {
  onJWT: '/jwt',

  winControl: '/wincontrol',
  login: '/login',
};

contextBridge.exposeInMainWorld('electronAPI', {
  onJWT: (callback) => ipcRenderer.on(channel.onJWT, callback),

  winControl: (action) => ipcRenderer.invoke(channel.winControl, action),
  login: () => ipcRenderer.invoke(channel.login),
});
