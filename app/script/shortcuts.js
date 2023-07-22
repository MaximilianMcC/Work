document.addEventListener("keydown", (e) => {

	// TODO: Use switch
	// Toggle the sidebar
	if (e.ctrlKey && e.key === "b") {

		document.querySelector(".sidebar").classList.toggle("hidden");
	}

});