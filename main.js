// Number Guessing Game
var	x = Math.floor(Math.random()*100)+1; // Computer chooses random number between 1 to 100

var y=x%2; // Check if the the number is even or odd and stores it

if (y===0) // Check if modulus is 0 and return even or odd

	alert ("Number is even");
else
	alert ("Number is odd");

for (var i = 1; i <= 10; i++) 
{
	let num = prompt ("Please enter a number:");
	// The computer prints a screen which prompts the user to enter a number

	if (num<i){
		alert("Number is lower, make another guess");
	}

	if (num>i){
		alert("Number is greater, make another guess");
	}

	if (num===i){
		alert("YOU WIN");
		break;
	}
	if (i===10){
		alert("YOU LOOSE")
	}
}