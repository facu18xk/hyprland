/*
Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.
 */
//Takes user's input 
const NUMBER = parseInt(prompt("Enter a number"));
//Create a for loop 
for (let i = 0; i < NUMBER; i++) {
	//Check if the iteration number is multiple of five and three if not check if is only mutliple of three if not check if is multiple of five otherwise print the iteration number
	if (i % 3 === 0 && i % 5 === 0)
		console.log("FizzBuzz");
	else if (i % 3 === 0)
		console.log("Fizz");
	else if (i % 5 === 0)
		console.log("Buzz");
	else
		console.log(i);
}
