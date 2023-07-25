function copyLine() {
	
	// Get the line of text that the user is editing
	const selection = document.getSelection();
	const anchor = selection.anchorNode;
	const text = anchor.textContent.slice(0, selection.focusOffset).split("\n");

	// Copy the text to clipboard
	navigator.clipboard.writeText(text);
}