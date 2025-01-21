//JS - About Us Page - Created by Juan Jacobo Florez Monroy/8857381 */
"use strict";

/**
 * Method to animate the contact us button when the mouse hover in
 * @param {*} evt
 */
const buttonAnimationHoverIn = (evt) => {
	$(evt.currentTarget).animate(
		{
			width: "+=1%",
			height: "+=5px",
			fontSize: "+=10%",
		},
		"slow"
	);
};

/**
 * Method to animate the contact us button when the mouse hover out
 * @param {*} evt
 */
const buttonAnimationHoverOut = (evt) => {
	$(evt.currentTarget).animate(
		{
			width: "-=1%",
			height: "-=5px",
			fontSize: "-=10%",
		},
		"slow"
	);
};

$(() => {
	const bxSliderImagesMP = bxSliderImages;
	bxSliderImagesMP.populateImagesArray();
	bxSliderImagesMP.addImagesBxSlider();

	$("#div_contact_us button").hover(
		buttonAnimationHoverIn,
		buttonAnimationHoverOut
	);

	// Initialize the slider
	$(".bxslider").bxSlider({
		mode: "fade", // Type of transition between slides.
		captions: true, // Include image captions. Captions are derived from the image's title attribute.
		responsive: true, // Enable or disable auto resize of the slider. Useful if you need to use fixed width sliders.
		auto: true, // Slides will automatically transition.
		randomStart: true, // Start slider on a random slide.
	});
});
