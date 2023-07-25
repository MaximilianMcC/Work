
document.querySelector("#addTextAreaRight").addEventListener("click", () => addTextArea());
document.querySelector("#removeTextAreaRight").addEventListener("click", () => removeTextArea());


// Add a new text area
function addTextArea() {

	const defaultText = "Hello, world!";
	editor.innerHTML += `<div class="text-area" contenteditable="true"><div class="editor">${defaultText}</div></div>`;
}

function removeTextArea() {

	// Get all of the text areas
	const textAreas = document.querySelectorAll(".text-area");
	if (textAreas.length <= 1) return;

	// Remove the last one
	textAreas[textAreas.length - 1].outerHTML = ``;
}