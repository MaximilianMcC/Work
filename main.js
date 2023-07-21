// Imports
const { app, BrowserWindow } = require("electron");
const path = require("path");

//!DEBUG:
require("electron-reload")(__dirname);

function createWindow() {
	
	// Make the Electron window
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Load the HTML
	window.loadFile("./app/index.html");
}

// Create the window
app.whenReady().then(createWindow);