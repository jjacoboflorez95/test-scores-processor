"use strict";

/* 
Examples of how to run with node when you are locate inside the test_scores folder:
node index.js 89 100 92 93
*/

// Array that stores the scores entered by the user. 
const scores = [];

/**
 * Function that joins the scores inside the scores array.
 * @returns String with the scores joined.
 */
const displayScores = () => scores.join(", ");

/**
 * Function that calculates the average of the scores.
 * @returns
 */
const calculateAverage = () => {
	const total = scores.reduce((prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array
// If statement that validates if the users entered at least one score.
if (process.argv.length < 3) {
	console.error("Error: \nPlease enter at least one score.");
} else {
	for (let i = 2; i < process.argv.length; i++) {
		// If statement that validates that all scores are numbers.
		if (isNaN(process.argv[i])) {
			console.error("Error: \nAll scores must be a number.");
			console.error("Score incorrect found: ", process.argv[i]);
			process.exit(1);
		}
		scores.push(process.argv[i]);
	}

	// display all scores
	console.log("All scores: ", displayScores());

	// display average score
	console.log("Average score: ", calculateAverage());
}
