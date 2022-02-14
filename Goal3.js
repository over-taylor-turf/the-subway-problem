// GOAL 3: Go forward and backward on the Red, Green, and Orange Lines

// I need to expand my array to include the Green and Orange line.
const subway = {
	Red: [
		'South Station', // Station 0
		'Park Street', // Station 1
		'Kendall', // Station 2
		'Central', // Station 3
		'Harvard', // Station 4
		'Porter', // Station 5
		'Davis', // Station 6
		'Alewife', // Station 7
	],
	Green: [
		'Government Center', // Station 0
		'Park Street', // Station 1
		'Boylston', // Station 2
		'Arlington', // Station 3
		'Copley', // Station 4
		'Hynes', // Station 5
		'Kenmore', // Station 6
	],
	Orange: [
		'North Station', // Station 0
		'Haymarket', // Station 1
		'Park Street', // Station 2
		'State', // Station 3
		'Downtown Crossing', // Station 4
		'Chinatown', // Station 5
		'Back Bay', // Station 6
		'Forest Hills', // Station 7
	],
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
	// I need to refactor my code to reference the start line and end line not just "Red".

	// VARIABLES

	// Calculate First Line Distance

	const startStationIndex = subway[startLine].indexOf(startStation); // First Line: Start Station

	const toParkStreet = subway[startLine].indexOf('Park Street'); // First Line: Park Street

	const distanceToParkStreet = Math.abs(startStationIndex - toParkStreet); // Distance on First Line

	// Calculate Second Line Distance

	const fromParkStreet = subway[endLine].indexOf('Park Street'); // End Line: Park Street

	const endStationIndex = subway[endLine].indexOf(endStation); // End Line: End Station

	const distanceFromParkStreet = Math.abs(endStationIndex - fromParkStreet); // Distance on Second Line

	// First Line Distance + Second Line Distance = Total Distance

	const totalDistance = distanceToParkStreet + distanceFromParkStreet;

	// If the stops are on the same line, I can use my solution from Version 2.
	if (startLine === endLine) {
		return Math.abs(endStationIndex - startStationIndex);
	} else {
		return totalDistance;
	}
};


// Testing: Forward on the Red Line
console.log(stopsBetweenStations('Red', 'Harvard', 'Red', 'Davis')); // 2
console.log(stopsBetweenStations('Red', 'Central', 'Red', 'Central')); //  0
console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')); // 7

// Testing: Backwards on the Red Line
console.log(stopsBetweenStations('Red', 'Porter', 'Red', 'Kendall')); // 3
console.log(stopsBetweenStations('Red', 'Davis', 'Red', 'Davis')); // 0
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7

// Testing: Red Line to Orange Line
console.log(stopsBetweenStations('Red', 'South Station', 'Orange', 'Chinatown')); // 4
console.log(stopsBetweenStations('Orange', 'Chinatown', 'Red', 'Davis')); // 8

// Testing: Orange Line to Green Line
console.log(stopsBetweenStations('Orange', 'Haymarket', 'Green', 'Boylston')); // 2
console.log(stopsBetweenStations('Orange', 'Forest Hills', 'Green', 'Kenmore')); // 10

// Testing: Green Line to Red Line
console.log(stopsBetweenStations('Green', 'Government Center', 'Red', 'Davis')); // 6
console.log(stopsBetweenStations('Red', 'Alewife', 'Green', 'Hynes')); // 10
