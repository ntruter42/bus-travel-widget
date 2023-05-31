// Get input elements
const calculate = document.querySelector('#calculate-button');
const points = document.querySelector('#points-input');
const locations = document.querySelector('#location-dropdown');
const returnTrip = document.querySelector('#return-checkbox');

// Get output elements
const singlesCount = document.querySelector('.singles-count');
const costPerSingle = document.querySelector('.singles-cost');

// Create instance
const bus = BusTravel();

// Initialize first load / refresh behavior
returnTrip.checked = false;

// Create functionality variables (eg. timeout id for messages)

// Create function to calculate values based on input
function calculateButtonClick() {
	bus.setPoints(points.value);
	bus.setLocation(locations.options[locations.selectedIndex].value);
	bus.setTime(document.querySelector('input[name="peak"]:checked').value);

	// Log outputs to test if input elements work
	console.log("Points: " + bus.getPoints());
	console.log("Location: " + bus.getLocation());
	console.log("Peak: " + bus.isPeak());
	console.log("Return: " + bus.isReturn());
	console.log();

	singlesCount.innerHTML = bus.countSingles();
	costPerSingle.innerHTML = 'R ' + bus.costPerSingle().toFixed(2);
}

function returnCheckboxToggle() {
	bus.toggleReturn();
}

// Create function to display invalid / empty input messages

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);

returnTrip.addEventListener('change', returnCheckboxToggle);