$(document).ready(function()
{
	$("#play").hover(function(){
		$(this).css("background-color", "#fb6c5b");
		},
		function(){
		$(this).css("background-color", "#d94a39");
		});
	var correct = Math.floor((Math.random()*20)+1);
	var guessed_correctly = false;
	$("#play").click(function ()
	{
		$("img").hide();
		var guess = prompt('What is your guess');
		$(this).css("left","70%");
		$(this).text("Guess Again?");
		if (guessed_correctly == false)
		{
			if (guess == correct)
			{
				$("#correct").show();
				alert("Exactly right! Way to go!");
				guessed_correctly = true;
				$(this).hide();
				$("#play_again").show()
				$("#play_again").click(function()
					{document.location.reload(true)});
			}
			else if (guess > correct + 7 || guess < correct - 7)
			{
				alert("You're Ice cold!");
				$("#ice_cold").show();
			}
			else if (guess > correct + 4 || guess < correct - 4)
			{
				alert("You're cold.");
				$("#cold").show();
			}
			else if (guess > correct + 2 || guess < correct - 2)
			{
				alert("You're warming up.");
				$("#warm").show();
			}
			else if (guess >= correct + 1 || guess <= correct - 1)
			{
				alert("You're on Fire!");
				$("#hot").show();
			}
			else
			{
				alert("Invalid guess, try again");
			}
		}
	});
});