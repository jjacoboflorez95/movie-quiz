// About Us Page - Created by Juan Jacobo Florez Monroy/8857381 */
("use strict");

const bxSliderImages = (() => {
	// Array that stores the full path of the images to be user in the bxslider.
	const imagesArray = [];
	// Array that stores the name + extension of the images to be user in the bxslider.
	const nameExtensionImages = [
		"staff1.jpg",
		"staff2.jpg",
		"staff3.jpg",
		"staff4.jpg",
	];
	// Array that stores the inital path where the images are located in the project.
	const initialPathImages = "../images/about_us_page/bx_slider_images/";

	// Public methods
	return {
		/**
		 * Method that populates the imagesArray with the full path for each image to be used in the bxslider.
		 * @returns
		 */
		populateImagesArray() {
			console.log("populateImagesArray");
			nameExtensionImages.forEach((nameExtensionImage) => {
				imagesArray.push(initialPathImages + nameExtensionImage);
			});
			console.log("imagesArray: ", imagesArray);
			return this;
		},

		/**
		 * Method that create the divs for the images to be used in the bxslider.
		 * @returns
		 */
		addImagesBxSlider() {
			const divBxSlider = $(".bxslider");
			let writeToHtml = "";
			for (const index in imagesArray) {
				writeToHtml += `<div><img src="${imagesArray[index]}" title="Our staff!" alt="staff${index}"/></div>`;
			}
			$(divBxSlider).html(writeToHtml);
			return this;
		},
	};
})();
