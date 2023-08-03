document.addEventListener("keydown", (e) => {

	switch (true) {

		// Toggle the sidebar
		case e.ctrlKey && e.key === "b":
			e.preventDefault();
			document.querySelector(".sidebar").classList.toggle("hidden");
			break;
	}

});