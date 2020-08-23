const { 
    app,
    BrowserWindow } = require("electron")
 
function createWindow () {
    //Create a browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences : {
            nodeIntegration: true
        }
    })
    //and load the index.html of the app
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})