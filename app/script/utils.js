// Clamp a number between a minimum value and a maximum value
function clamp(value, min, max) {

	return Math.max(min, Math.min(value, max));
}

// Insert string into another string at an index
function insert(originalString, insertedString, index) {
	return originalString.slice(0, index) + insertedString + originalString.slice(index);
}