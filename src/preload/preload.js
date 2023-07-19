const { contextBridge } = require('electron');
const { winControl } = require('./window-control');

contextBridge.exposeInMainWorld('electronAPI', {
  winControl,
});
