(() => {
	const slider = document.getElementById('slider');

	noUiSlider.create(slider, {

		start: [20],
		snap: true,
		range: {
			'min': 0,
			'19.4%': 20,
			'48.7%': 50,
			'max': 100
		}
	});
})();