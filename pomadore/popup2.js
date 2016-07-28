

var studyMinutes = 3;
var duration = 60 * studyMinutes;
var display = document.querySelector('#time');

	
	function timer() {
		
		var start = Date.now();
		var diff, minutes, seconds;

        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        } 
		
		console.log("minutes" + minutes);
		console.log("seconds" + seconds);
		display.textContent = minutes + ":" + seconds;
}


/*function anonfunction(){
window.onload = function () {
	//for (var i = 0;i<rounds;i++)
    var studyTime = 60 * studyMinutes,
        display = document.querySelector('#time');
    startTimer(studyTime, display);
};};


startButton.getEventListener("click", function(){console.log("poop")});*/
window.onload = function () {
	//for (var i = 0;i<rounds;i++)
	
	var startButton = document.getElementById('start button');
	startButton.addEventListener("click",function(){
	//display.textContent = minutes + ":" + seconds; 
	//timer()
	setInterval(timer, 20); //first parameter is thing to be executed, second one is time to wait in milliseconds before it happens again. displays the timer 
	});

}
