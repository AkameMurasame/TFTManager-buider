const { app, BrowserWindow, protocol, Protocol } = require("electron");
const path = require("path");
const url = require("url");

const LCUConnector = require("lcu-connector");
const connector = new LCUConnector();
const IPC = require('electron').ipcRenderer;

let win;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }, maximizable: true,
  });
  win.setMenu(null);
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `app/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  connector.start();
  connector.on("connect", async (data) => {
    setTimeout(async () => {
      win.webContents.send('lcu-load', data);
    }, 5000);
  });

  win.webContents.openDevTools();

  win.on('minimize', function (event) {
    event.preventDefault()
    win.hide()
  })

  win.on("closed", () => {
    win = null;
  });
}

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  event.preventDefault()
  callback(true)
});

app.on("ready", createWindow);

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/* app.whenReady().then(() => {
  protocol.registerSchemesAsPrivileged([{ scheme: 'file', privileges: { secure: true, standard: true } }])
  protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])
}) */
