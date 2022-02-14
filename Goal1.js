// GOAL 1: Go forward on the Red Line. 

// Create a variable to hold the red line stations.
// An array seems like the best option as the order is important and will help me solve the problem.

const Red = [
		'South Station',
		'Park Street',
		'Kendall', 
		'Central', 
		'Harvard',
		'Porter',
		'Davis',
		'Alewife',
];

// The problem description gives us the name of the function: stopsBetweenStations.
// The problem description gives us the arguments: (startLine, startStation, endLine, endStation).

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
	// 1. Find the location of starting station
		const startStationIndex = Red.indexOf(startStation);
	// 2. Find the location of ending station
		const endStationIndex = Red.indexOf(endStation);
	// 3. Calculate the difference between the ending and starting station. 
		return startStationIndex - endStationIndex;
};

// Testing: Forward on the Red Line
console.log(stopsBetweenStations('Red', 'Harvard', 'Red', 'Davis')); // 2
console.log(stopsBetweenStations('Red', 'Central', 'Red', 'Central')); // 0
console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')); // 7

