// Get input elements
const calculate = document.querySelector('#calculate-button');
const points = document.querySelector('#points-input');
const locations = document.querySelector('#location-dropdown');

// Get output elements

// Create instance
const bus = BusTravel();

// Create functionality variables (eg. timeout id for messages)

// Create function to calculate values based on input
function calculateButtonClick(){
	bus.setPoints(points.value);
	bus.setLocation(locations.options[locations.selectedIndex].value);

	// Log outputs to test if input elements work
	console.log(bus.getPoints());
	console.log(bus.getLocation());
}

// Create function to display invalid / empty input messages

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);