var userChoice;
var options = ['rock', 'paper', 'scissors'];
var userWins = 0;
var computerWins = 0;
var ties = 0;

function outPutResult(result) {
	resultOutput = $('result');
	if(result === 'win') {
		resultOutput.addClass('green');
		resultOutput.('red');
		resultOutput.text('User Wins');
		userWins += 1;
		$('.user').text(userWins);
	} else if(result === 'lose'{
		resultOutput.addClass('red');
		resultOutput.removeClass('green');
		resultOutput.text('Computer Wins');
		computerWins += 1;
		$('.computer').text(computerWins);
	} else {
		resultOutput.removeClass('red');
		resultOutput.removeClass('green');
		resultOutput.text('Tie');
		ties += 1;
		$('.ties').text(ties);
	}
}


function determineWinner(user, computer) {
	if(user == 'rock') {
		switch(computer) {
			case 'rock':
				outputResult('tie')
				break;
			case 'paper':
				outputResult('lose');
				break;
			case 'scissors':
				outputResult('win');
				break;
		}

	}else if(user == 'paper') {
		switch(computer) {
			case 'rock':
				outputResult('win')
				break;
			case 'paper':
				outputResult('tie');
				break;
			case 'scissors':
				outputResult('lose');
				break;
		}
	 } else {
		  switch(computer) {
			case 'rock':
				outputResult('lose')
				break;
			case 'paper':
				outputResult('win');
				break;
			case 'scissors':
				outputResult('tie');
				break;
		  }
		}
}

function computerChoice(choice) {
  $('.start').hide();
  var pre = 'User: '
  var comp = 'Computer: '
  $('.userChoice').text(pre + choice)
}

$('.selector').click( function() {
	userChoice = $(this).attr('id');
	computerChoice(userChoice);
})

function determineWinner(user, computer) {
  if (user === 'rock') {
    switch(computer) {
        case 'rock'
    }
  }
}