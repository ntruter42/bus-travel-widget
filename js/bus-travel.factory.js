function BusTravel() {
	// create variable to store points integer
	let points = 0;
	// create variable to store location string
	let location = '';
	// create variable to store peak/off-peak time boolean
	let peak = false;
	// create variable to store return-trip boolean
	// create object to store location costs

	// set and get points input as number
	function setPoints(pointsInput) {
		if (isNaN(pointsInput)) {
			console.log("Points input is not a number");
		} else if (Number(pointsInput) < 0) {
			console.log("Points input is negative");
		} else {
			points = Number(pointsInput);
		}
	}

	function getPoints() {
		return points;
	}

	// set and get location input as string
	function setLocation(locationInput) {
		location = locationInput;
	}

	function getLocation() {
		return location;
	}

	// set and get peak/off-peak time as a boolean from a string
	function setTime(time) {
		if (time === 'peak') {
			peak = true;
		} else if (time === 'off-peak') {
			peak = false;
		}
	}

	function isPeak() {
		return peak;
	}

	// toggle  and check return-trip option as a boolean
	// count number of single trips
	// return cost per single trip from location-cost object
	// count number of return trips
	// return cost per return trip from location-cost object
	// set and get validation messages

	return {
		setPoints,
		getPoints,
		setLocation,
		getLocation,
		setTime,
		isPeak
	};
}