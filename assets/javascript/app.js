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
		// comparing the variables we created above to our input values
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "George Lucas"){
			correctCount++;
		}
		else{
			wrongCount++;
		};
		

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Tantooine"){
			correctCount++;
		}
		else{
			wrongCount++;
		};


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Admiral Ackbar"){
			correctCount++;
		}
		else{
			wrongCount++;
		};

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "You don't believe it"){
			correctCount++;
		}
		else{
			wrongCount++;
		};

		$("#results").html('You answered ' + correctCount + ' of 4 correct');
		$("#unanswered").html('You did not answer ' + unansweredCount + ' question(s)');

		console.log(correctCount);
		console.log(wrongCount);
		console.log(unansweredCount);
	};

	
		
		
		

	


	

});