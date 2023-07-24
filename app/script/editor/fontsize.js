// Increase the font size
function increaseFontSize() {
	
	// Calculate the new font size, then set it
	const newFontSize = fontSize + fontSizeCoefficient;
	fontSize = clamp(newFontSize, 1, 256);
	setFontSize(fontSize);
}

// Increase the font size
function decreaseFontSize() {

	// Calculate the new font size, then set it
	const newFontSize = fontSize - fontSizeCoefficient;
	fontSize = clamp(newFontSize, 1, 256);
	setFontSize(fontSize);
}

// Set the font size to a value. Size is in px
function setFontSize(size) {

	// Turn the font size into pixels
	size += "px";

	// Select all of textareas
	document.querySelectorAll(".text-area .editor").forEach(textArea => {

		// Set their new fontsize
		textArea.style.fontSize = size;
	});
}