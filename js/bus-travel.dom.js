// Get input elements
const calculate = document.querySelector('#calculate-button');
const points = document.querySelector('#points-input');
const locations = document.querySelector('#location-dropdown');
const returnTrip = document.querySelector('#return-checkbox');

// Get output elements
const singlesCount = document.querySelector('.singles-count');
const costPerSingle = document.querySelector('.singles-cost');
const returnsCount = document.querySelector('.returns-count');
const costPerReturn = document.querySelector('.returns-cost');
const outputElements = document.querySelectorAll('.output-element');

// Create instance
const bus = BusTravel();

// Initialize first load / refresh behavior
returnTrip.checked = false;

// Create function to calculate values based on input
function calculateButtonClick() {
	bus.setPoints(points.value);
	bus.setLocation(locations.options[locations.selectedIndex].value);
	bus.setTime(document.querySelector('input[name="peak"]:checked').value);

	let message = '';
	singlesCount.classList.remove('danger', 'warning');
	returnsCount.classList.remove('danger', 'warning');

	if (isNaN(points.value)) {
		message = "Points amount is invalid";
		singlesCount.innerHTML = message;
		returnsCount.innerHTML = message;
		singlesCount.classList.add('danger');
		returnsCount.classList.add('danger');
	} else if (Number(points.value) < 0) {
		message = "Points amount cannot be negative";
		singlesCount.innerHTML = message;
		returnsCount.innerHTML = message;
		singlesCount.classList.add('warning');
		returnsCount.classList.add('warning');
	} else if (bus.getPoints() === 0) {
		message = "No points, no trips :(";
		singlesCount.innerHTML = message;
		returnsCount.innerHTML = message;
		singlesCount.classList.add('warning');
		returnsCount.classList.add('warning');
	} else if (!bus.isReturn() && bus.getPoints() < bus.costPerSingle()) {
		message = "Not enough points for a single trip";
		singlesCount.innerHTML = message;
		singlesCount.classList.add('warning');
	} else if (bus.isReturn() && bus.getPoints() < bus.costPerReturn()) {
		message = "Not enough points for a return trip";
		returnsCount.innerHTML = message;
		returnsCount.classList.add('warning');
	} else {
		singlesCount.innerHTML = bus.countSingles();
		returnsCount.innerHTML = bus.countReturns();
	}
	costPerSingle.innerHTML = 'R' + bus.costPerSingle().toFixed(2);
	costPerReturn.innerHTML = 'R' + bus.costPerReturn().toFixed(2);
}

function returnCheckboxToggle() {
	bus.toggleReturn();

	outputElements.forEach(element => {
		element.classList.toggle('hidden');
	});
	calculateButtonClick();
}

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);

returnTrip.addEventListener('change', returnCheckboxToggle);