

var response = prompt("Guess a number between 1 and 100");
 

	if (isNaN(response)) {
		void alert ("That's not a nummber - reload your browser!");
		throw 'That is not a number!';
	}

// Random number generator
var generatedNum = Math.ceil(Math.random()*100);

console.log(generatedNum);

var win=false;

function compare(response, generatedNum) {

while (win===false) {

	if (response>generatedNum) {
		response = prompt("That's too high....guess again!");
	}
	else if (response<generatedNum){
		response = prompt("That's too low....guess again!");
	}	
	else {
		confirm ("You guessed the number!  Are you psychic??");
		win=true;
	}

}
}

compare (response, generatedNum);
