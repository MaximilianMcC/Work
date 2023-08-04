window.addEventListener("keydown", () => {

	// Update the current caret position
	document.querySelector("#rowsAndColumns").textContent = `Row: ${cursorPosition[1]}, Col: ${cursorPosition[0]}`;
	
	// Get the count of words that aren't empty strings
	const words = output.match(/[\w\d\’\'-]+/gi);
	const wordCount = words ? words.length : 0;
	let wordCountText = "words";
	if (wordCount === 1) wordCountText = "word";
	document.querySelector("#wordCount").textContent = `${wordCount} ${wordCountText}`;
});