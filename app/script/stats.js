window.addEventListener("keydown", () => {

	// Update the current caret position
	document.querySelector("#rowsAndColumns").textContent = `Row: ${caretY + 1}, Col: ${caretX + 1}`;
	
	// Word count
	{
		// Get the count of all real words
		const words = output.join(" ").match(/[\w\d\'\'-]+/gi);
		const wordCount = words ? words.length : 0;
		let wordCountText = "words";
		if (wordCount === 1) wordCountText = "word";
		document.querySelector("#wordCount").textContent = `${wordCount} ${wordCountText}`;
	}

});