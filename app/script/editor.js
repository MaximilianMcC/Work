const statusBar = document.querySelector(".status-bar");
const editor = document.querySelector(".textarea");

//? Each item in the array is a new line
let output = [""];

// Store the caret position rows and columns
// TODO: Smooth cursor animation
let caretX = 0;
let caretY = 0;

window.addEventListener("keydown", (e) => {

	// Ignore the fancy keys that aren't used for typing
	if (e.ctrlKey || e.altKey || e.metaKey) return;

	// Check for if they want to do an action like delete or new line
	switch (e.key) {

		case "Backspace":

			// Remove the last character from the current line
			output[caretY] = output[caretY].slice(0, -1);
			caretX--;

			// Check if we are going up a line
			if (caretX <= 1)
			{
				// Decrease the Y and reset the X
				caretY--;
				caretX = 0;
			}
			break;

		case "Enter":

			// Increase the Y and reset the X
			caretY++;
			caretX = 0;

			// Make the new line
			if (!output[caretY]) output[caretY] = "";
			break;

		case "ArrowLeft":
			caretX--;

			// Check if it exceeds the line, and go to end of line above
			if (caretX < 0)
			{
				caretY--;
				caretX = output[caretY].length;
			}
			break;

		case "ArrowRight":
			caretX++;

			// Check if it exceeds the line, and go to end of line above
			if (caretX > output[caretY].length)
			{
				caretY++;
				caretX = 0;
			}
			break;

	}



	// Check for if the key string is larger than 1 character (normal letter key thing)
	if (e.key.length === 1) {

		output[caretY] += e.key;
		caretX++;
	}

	// Clamp cursor position
	if (caretX < 0) caretX = 0;
	if (caretY < 0) caretY = 0;


	// TODO: Don't replace the content all the time. Edit instead
	// TODO: Don't replace the caret. Use the old one

	// Add the cursor to the output html
	// TODO: Add smooth cursor animation and blinking animation
	const caret = `<div class="caret"></div>`;
	let outputHtml = ``;
	for (let i = 0; i < output.length; i++) {

		// Check if the cursor should be added
		if (i == caretY) outputHtml += `<pre>${output[i].slice(0, caretX)}${caret}${output[i].slice(caretX)}</pre>`;
		else outputHtml += output[i];

		// Check if a new line must be added
		if (i != output.length) outputHtml += "\n";
	}

	// Write the text to the DOM
	editor.innerHTML = outputHtml;



	//! Stringify to see escaped characters btw.
	console.log(`${JSON.stringify(output)}\n${[caretX, caretY]}\n${output}\n`);
});