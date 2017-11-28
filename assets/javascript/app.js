$(document).ready(function() {

	var timeLeft = 30;
	var elem = document.getElementById('timer');
	
	var timerId = setInterval(countdown, 1000);
	
	function countdown() {
	 	if (timeLeft === 0) {
	    clearTimeout(timerId);
	    // showResults(questions, quizContainer, resultsContainer);
	  } else {
	    elem.innerHTML = timeLeft + ' seconds remaining';
	    timeLeft--;
	  }
	};

});