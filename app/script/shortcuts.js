document.addEventListener("keydown", (e) => {

	switch (true) {
		case e.ctrlKey && e.key === "b":
			e.preventDefault();
			document.querySelector(".sidebar").classList.toggle("hidden");
			break;
	
		case e.ctrlKey && e.shiftKey && e.key === ">":
			e.preventDefault();	
			increaseFontSize();	
			break;

		case e.ctrlKey && e.shiftKey && e.key === "<":
			e.preventDefault();	
			decreaseFontSize();	
			break;
		
		case e.ctrlKey && e.key === "c":
			copyLine();
			break;
	}

});