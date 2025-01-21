/* Priyanshi Mevawala - 8876660 */
document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item) => {
		const title = item.querySelector(".accordion-title");
		const details = item.querySelector(".accordion-details");

		title.addEventListener("click", () => {
			if (item.classList.contains("active")) {
				// If the clicked item is already active, remove active class
				item.classList.remove("active");
				details.style.display = "none";
			} else {
				// Deactivate all other items and activate the clicked item
				accordionItems.forEach((otherItem) => {
					otherItem.classList.remove("active");
					otherItem.querySelector(".accordion-details").style.display = "none";
				});

				item.classList.add("active");
				details.style.display = "block";
			}
		});
	});
});
