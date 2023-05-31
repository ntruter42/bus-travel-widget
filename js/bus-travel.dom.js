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
const singleElements = document.querySelectorAll('.single-element');
const returnElements = document.querySelectorAll('.return-element');
const message = document.querySelector('.message');

// Create instance
const bus = BusTravel();

// Initialize first load / refresh behavior
returnTrip.checked = false;
let timeout;

// Create function to calculate values based on input
function calculateButtonClick() {
	bus.setPoints(points.value);
	bus.setLocation(locations.options[locations.selectedIndex].value);
	bus.setTime(document.querySelector('input[name="peak"]:checked').value);
	clearTimeout(timeout);

	if (bus.isReturn()) {
		singleElements.forEach(element => {
			element.classList.add('hidden');
		});
		returnElements.forEach(element => {
			element.classList.remove('hidden');
		});
	} else {
		singleElements.forEach(element => {
			element.classList.remove('hidden');
		});
		returnElements.forEach(element => {
			element.classList.add('hidden');
		});
	}

	message.classList.remove('danger', 'warning');
	message.classList.add('hidden');

	if (points.value === '') {
		message.innerHTML = "Enter points amount";
		message.classList.add('danger');
		message.classList.remove('hidden');
	} else if (isNaN(points.value)) {
		message.innerHTML = "Points amount must be a number";
		message.classList.add('danger');
		message.classList.remove('hidden');
	} else if (Number(points.value) < 0) {
		message.innerHTML = "Points amount cannot be negative";
		message.classList.add('danger');
		message.classList.remove('hidden');
	} else if (bus.getPoints() === 0) {
		message.innerHTML = "No points, no trips";
		message.classList.add('warning');
		message.classList.remove('hidden');
	} else if (!bus.isReturn() && bus.getPoints() < bus.costPerSingle()) {
		message.innerHTML = "Not enough points for a single trip";
		message.classList.add('warning');
		message.classList.remove('hidden');
	} else if (bus.isReturn() && bus.getPoints() < bus.costPerReturn()) {
		message.innerHTML = "Not enough points for a return trip";
		message.classList.add('warning');
		message.classList.remove('hidden');
	} else {
		singlesCount.innerHTML = bus.countSingles();
		returnsCount.innerHTML = bus.countReturns();
	}
	timeout = setTimeout(function () {
		message.classList.add('hidden');
	}, 3000);
	costPerSingle.innerHTML = 'R' + bus.costPerSingle().toFixed(2);
	costPerReturn.innerHTML = 'R' + bus.costPerReturn().toFixed(2);
}

function returnCheckboxToggle() {
	bus.toggleReturn();
}

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);

returnTrip.addEventListener('change', returnCheckboxToggle);