// Get input elements
const calculate = document.querySelector('#calculate-button')
const points = document.querySelector('#points-input');

// Get output elements

// Create instance
const bus = BusTravel();

// Create functionality variables (eg. timeout id for messages)

// Create function to calculate values based on input
function calculateButtonClick(){
	bus.setPoints(points.value);
	console.log(bus.getPoints());
}

// Create function to display invalid / empty input messages

// Create event listener for calculate button
calculate.addEventListener('click', calculateButtonClick);