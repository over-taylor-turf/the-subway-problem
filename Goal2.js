// GOAL 2: Go forward and backward on the Red Line. 

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
	// 1. Find the location of starting station
		const startStationIndex = Red.indexOf(startStation);
	// 2. Find the location of ending station
		const endStationIndex = Red.indexOf(endStation);
	// 3. Calculate the difference between the starting and ending station, return a positive number. 
		return Math.abs(startStationIndex - endStationIndex);
};


// Testing: Forward on the Red Line
console.log(stopsBetweenStations('Red', 'Harvard', 'Red', 'Davis')); // 2
console.log(stopsBetweenStations('Red', 'Central', 'Red', 'Central')); //  0
console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')); // 7

// Testing: Backwards on the Red Line
console.log(stopsBetweenStations('Red', 'Porter', 'Red', 'Kendall')); // 3
console.log(stopsBetweenStations('Red', 'Davis', 'Red', 'Davis')); // 0
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * // 

// Remember Growth Mindset
// 1. My original solution: 
if (startStationIndex > endStationIndex) {
	return startStationIndex - endStationIndex;
} else {
	return endStationIndex - startStationIndex;
}

// Remember Growth Mindset
// 2. My solution after refactoring a second time: 
const result = endStationIndex - startStationIndex;

if (result > 0) {
	return result;
} else if (result < 0) {
	return result * -1;
} else {
	return 0;
}

// Remember Growth Mindset
// 3. My solution after refactoring a third time: 
		return Math.abs(startStationIndex - endStationIndex);