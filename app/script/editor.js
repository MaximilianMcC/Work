const editor = document.querySelector("#editor");
let output = "";

// Store the cursor position rows and columns
// TODO: Smooth cursor animation
let cursorPosition = [1, 1];
const cursor = `<span class="cursor">|</span>`;	

window.addEventListener("keydown", (e) => {

	// Ignore the fancy keys that aren't used for typing
	if (e.ctrlKey || e.altKey || e.metaKey) return;

	// Check for if they want to do an action like delete or new line
	switch (e.key) {
		case "Backspace":
			output = output.slice(0, -1);
			cursorPosition[0]--;
			break;
	
		case "Enter":
			output += "\n";
			cursorPosition[1]++;
			break;
	}

	// Check for if the key string is larger than 1 character
	if (e.key.length === 1) {
		output += e.key;
		cursorPosition[0]++;
	}

	// TODO: Don't replace all the time. Edit instead

	// Add the cursor and make it html
	const outputCursor = output.slice(0, cursorPosition[0]) + cursor + output.slice(cursorPosition[0]);
	const outputHtml = `<p>${outputCursor}</p>`;
	editor.innerHTML = outputHtml;
});