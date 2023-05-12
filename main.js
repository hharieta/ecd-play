// console.log(`Hello ECD-PLAY 👋`)

const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width:1980,
        height:1024,
        webPreferences: {
            preload: path.join(__dirname, 'js/preload.js'),
        },
        icon: path.join(__dirname, 'src/img/logo.png')
    })

    ipcMain.handle('ping', () => 'pong')
    win.loadFile('pages/index.html')
}

app.whenReady().then(() =>{
    createWindow()

    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin'){
        app.quit()
    }
})