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

	// Check for if some text is selected
	const selection = window.getSelection();
	if (selection .rangeCount <= 0) return;

	// Get the selected text
	const range = selection.getRangeAt(0);

	// Wrap the text in a span with increased font-size
	const newText = document.createElement("span");
	newText.style.fontSize = (size + "px");
	range.surroundContents(newText);

	console.log(size);
}