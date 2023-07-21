document.addEventListener("keydown", (e) => {

	// TODO: Use switch
	// Toggle the sidebar
	if (e.ctrlKey && e.key === "b") {

		console.log("Toggling sidebar rn");
		const sidebar = document.querySelector(".sidebar");

		// Check for if the sidebar is hidden, or not then swap the state
		if (sidebar.classList.contains("show")) {
			
			// Hide the sidebar
			sidebar.classList.remove("show");
			sidebar.classList.add("hide");
		} else {
			
			// Show the sidebar
			sidebar.classList.remove("hide");
			sidebar.classList.add("show");
		}
	}

});