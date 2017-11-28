$(document).ready(function() {
// countdown timer
	var timeLeft = 10;
	var elem = document.getElementById('timer');
	var timerId = setInterval(countdown, 1000);
	
	function countdown() {
	 	if (timeLeft === 0) {
	    clearTimeout(timerId);
	    timeUp();
	  } else {
	    elem.innerHTML = timeLeft + ' seconds remaining';
	    timeLeft--;
	  }
	};

var userGuess = '';
var wrongCount = 0;
var unansweredCount = 0;
var correctCount = 0;

function timeUp(){

		
		// Check values of Radio Buttons .val() gives us our selected answer and stores it in var Q1 etc.
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		


		// Determine the right/wrong/unanswered counts for each question
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "George Lucas"){
			correctCount++;
		}
		else{
			wrongCount++;
		}
		console.log(correctCount);
	}


});