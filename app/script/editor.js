const editor = document.getElementById("editor");



// Check for when a key is pressed
window.addEventListener("keydown", (e) => {
	
	// Only get keys that can be displayed
	// TODO: Ignore stuff like ctrl+c and ctrl+v, ctrl+shift+>, ctrl+shift+<, etc
	if (e.code == "Space") appendCharacter(" "); //TODO: Don't use sus invisible character
	else if (e.key.length === 1) appendCharacter(e.key);
})




function appendCharacter(character) {
	
	let text = character;

	// Add the character to the document
	editor.innerText += text;
}