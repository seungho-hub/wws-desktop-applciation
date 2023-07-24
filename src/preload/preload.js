const { contextBridge } = require('electron');
const { ipcRenderer } = require('electron');

const channel = {
  winControl: '/wincontrol',
};

contextBridge.exposeInMainWorld('electronAPI', {
  winControl: (action) => ipcRenderer.invoke(channel.winControl, action),
});
