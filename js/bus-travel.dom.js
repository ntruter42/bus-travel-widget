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

	singlesCount.innerHTML = bus.countSingles();
	costPerSingle.innerHTML = 'R' + bus.costPerSingle().toFixed(2);
	returnsCount.innerHTML = bus.countReturns();
	costPerReturn.innerHTML = 'R' + bus.costPerReturn().toFixed(2);
}

function returnCheckboxToggle() {
	bus.toggleReturn();

	outputElements.forEach(element => {
		element.classList.toggle('hidden');
	});
}

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);

returnTrip.addEventListener('change', returnCheckboxToggle);