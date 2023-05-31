describe('BusTravel', function () {
	let bus;
	
	beforeEach(function () {
		bus = BusTravel();
	});

	// template to copy & paste
	describe('FunctionName', function () {
		it('test description', function () {
			assert.equal(true, true);
		});
	});

	// Test setPoints for:
	// valid number
	// zero
	// negative number
	// string
	describe('setPoints, getPoints', function () {
		it('should set and return points amount of 50', function () {
			bus.setPoints(50);
			
			assert.equal(bus.getPoints(), 50);
		});

		it('should set and return points amount of 0', function () {
			bus.setPoints(0);

			assert.equal(bus.getPoints(), 0);
		});

		it('should not set points amount to negative number', function () {
			bus.setPoints(-50);

			assert.equal(bus.getPoints(), 0);
		});

		it('should not set points amount to value that is not a number', function () {
			bus.setPoints("hello");

			assert.equal(bus.getPoints(), 0);
		});

		it('should keep initial value of points if invalid input is given', function () {
			bus.setPoints(50);
			assert.equal(bus.getPoints(), 50);

			bus.setPoints(-10);
			assert.equal(bus.getPoints(), 50);
		});
	});

	// Test setLocation for all 3 options:
	// "Khayelitsha"
	// "Dunoon"
	// "Mitchells Plain"
	describe('setLocation, getLocation', function () {
		it('should return "Khayelitsha" when location is set to "Khayelitsha"', function () {
			bus.setLocation("Khayelitsha");
			
			assert.equal(bus.getLocation(), "Khayelitsha");
		});

		it('should return "Dunoon" when location is set to "Dunoon"', function () {
			bus.setLocation("Dunoon");

			assert.equal(bus.getLocation(), "Dunoon");
		});

		it('should return "Mitchells Plain" when location is set to "Mitchells Plain"', function () {
			bus.setLocation("Mitchells Plain");

			assert.equal(bus.getLocation(), "Mitchells Plain");
		});
	});

	// Test setTime for:
	// set peak boolean to true for peak string
	// set peak boolean to false for off-peak string

	// Test toggleReturn for:
	// set return boolean to true for return ticket
	// set return boolean to false for non-return ticket

	// Test countSingles for:
	// 120 points to "Khayelitsha" (40 points)
	// 120 points to "Dunoon" (25 points)
	// 300 points to "Mitchells Plain" (30 points)
	// 20 points to "Khayelitsha" (40 points)

	// Test costPerSingle for:
	// "Khayelitsha" = 40 points
	// "Dunoon" = 25 points
	// "Mitchells Plain" = 30 points

	// Test countReturns for:
	// 160 points to "Khayelitsha" (40 points)
	// 160 points to "Dunoon" (25 points)
	// 450 points to "Mitchells Plain" (30 points)
	// 50 points to "Mitchells Plain" (30 points)

	// Test costPerReturn for:
	// "Khayelitsha" = 80 points
	// "Dunoon" = 50 points
	// "Mitchells Plain" = 60 points
});