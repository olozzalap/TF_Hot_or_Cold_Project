$(document).ready(function(){
	var correct = Math.floor((Math.random()*20)+1);
	$("#play").click(function (){
		var guess = prompt('What is your guess');
		var guessed_correctly = false;
		while (guessed_correctly == false){
			var guess = prompt('What is your guess');
			if (guess === correct){
				alert("Exactly right! Way to go!");
				guessed_correctly = true;
			}
			else if (guess > correct)
				alert("You're cold");
			else if (guess < correct)
				alert("You're warm");
			else
				alert("Invalid guess, try again");
		};
	});
});