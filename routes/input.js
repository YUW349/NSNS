var data = require("../tasks.json");
exports.addNewTask = function(req,res){
	var taskname = req.query.taskname;
	var time = req.query.time;
	var time2 = req.query.time2;
	var time3 = req.query.time3;
	var location = req.query.location;
	var count = Object.keys(data.tasks).length ;

	var countDownDate = new Date("Feb 22, 2018 " + time + time2 + time3).getTime();
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		/*var audio = new Audio("");
		audio.src = '/sonosaki.mp3';*/
		if(distance<0){
        		var countdown = "TIME UP";
				}else{
				var countdown = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
				}
		
	var newTask = { 
	            "taskname" : "Task Name: " + taskname,
				"time" : "Time: " + time+time2+time3,
				"countdown" : countdown,
				"location" : "Location: " + location,
				"id" : count
		}
	/*var x = document.getElementById("myAudio"); 

		function playAudio() { 
		x.play(); 
	} */

    console.log(count);
	//console.log(newTask);
    data.tasks.push(newTask);
    //console.log(data);
    res.render('home',data);
}