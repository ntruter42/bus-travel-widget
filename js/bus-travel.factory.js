function BusTravel() {
	// create variable to store points integer
	let points = 0;
	// create variable to store location string
	let location = '';
	// create variable to store peak/off-peak time boolean
	let peakTime = false;
	// create variable to store return-trip boolean
	let returnTrip = false;
	// create object to store location costs
	let locationCost = {
		"Khayelitsha": 40,
		"Dunoon": 25,
		"Mitchells Plain": 30
	}

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

	// set and check peak/off-peak time as a boolean from a string
	function setTime(time) {
		if (time === 'peak') {
			peakTime = true;
		} else if (time === 'off-peak') {
			peakTime = false;
		}
	}

	function isPeak() {
		return peakTime;
	}

	// toggle and check return-trip option as a boolean
	function toggleReturn() {
		if (returnTrip === false) {
			returnTrip = true;
		} else if (returnTrip === true) {
			returnTrip = false;
		}
	}

	function isReturn() {
		return returnTrip;
	}

	// count number of single trips
	function countSingles() {
		let cost = locationCost[getLocation()];
		if (isPeak()) {
			// 25% = 100% / 4
			cost += cost / 4;
		}
		return Math.floor(getPoints() / cost);
	}

	// return cost per single trip from location-cost object
	function costPerSingle() {
		return locationCost[getLocation()];
	}

	// count number of return trips
	function countReturns() {
		return Math.floor(countSingles() / 2);
	}

	// return cost per return trip from location-cost object
	// set and get validation messages

	return {
		setPoints,
		getPoints,
		setLocation,
		getLocation,
		setTime,
		isPeak,
		toggleReturn,
		isReturn,
		countSingles,
		costPerSingle,
		countReturns
	};
}