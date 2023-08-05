
// Run everything initially when it loads and when a key is pressed
document.addEventListener("DOMContentLoaded", () => update());
window.addEventListener("keydown", () => update());

function update() {
	
	RowsAndColumns();
	wordCount();
}



// Get the current cursor row and column
function RowsAndColumns() {

	// Update the current caret position text
	document.querySelector("#rowsAndColumns").textContent = `Row: ${caretY + 1}, Col: ${caretX + 1}`;
}

// Get how many words there are
function wordCount() {

	// Get the count of all real words
	const words = output.join(" ").match(/[\w\d\'\'-]+/gi);
	const wordCount = words ? words.length : 0;

	// Make it look fancy in the DOM
	let wordCountText = "words";
	if (wordCount === 1) wordCountText = "word";
	document.querySelector("#wordCount").textContent = `${wordCount} ${wordCountText}`;
}