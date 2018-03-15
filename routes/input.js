var data = require('../public/tasks.json');



exports.addNewTask = function(req,res){
	var taskname = req.query.taskname;
	var date1 = req.query.date1;
	var date2 = req.query.date2;
	var date3 = req.query.date3;
	var time = req.query.time;
	var time2 = req.query.time2;
	var time3 = req.query.time3;
	var location = req.query.location;
	var count = Object.keys(data.tasks).length ;

	var countDownDate = new Date(date1 + date2 + date3 + time + time2 + time3).getTime()+28800000;
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if(distance<=0){
        		var countdown = "PAST DUE";
        		
				}else{
				var countdown = "DUE IN: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
				}



		/*var audio = new Audio("");
		audio.src = '/sonosaki.mp3';*/
		
		
	var newTask = { 
	            "taskname" : taskname,
              "date1" : date1,
              "date2" : date2,
              "date3" : date3,
               "time1" : time,
              "time2" : time2,
              "time3" : time3,
        "time" : date1 + date2 + date3 + time +time2+time3,
				"countdown" : countdown,
				"location" : "Price Center " ,
				"id" : count,
				"onsetTime" : distance,
				"soundAlt" : false

		}
	/*var x = document.getElementById("myAudio"); 

		function playAudio() { 
		x.play(); 
	} */

    //console.log(distance);
	console.log(newTask);
    data.tasks.push(newTask);
    //console.log(data);

    res.render('home',data);
};



// var x = setInterval(function() {
// 	var count = Object.keys(data.tasks).length ;
// 	// Get todays date and time
// 	var now = new Date().getTime();

// 	// Find the distance between now an the count down date
	

// 	// Display the result in the element with id="demo"
// 	// If the count down is finished, write some text 
// 	for(var i = 0; i< count; i++){

// 		var countDownDate = new Date("Feb 22, 2018 " + data.tasks[i].time).getTime();
// 		var distance = countDownDate - now;

// 		// Time calculations for days, hours, minutes and seconds
// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// 		if(distance<0){
// 			var countdown = "TIME UP";
// 			}else{
// 			var countdown = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// 			}

// 		data.tasks[i].countdown = countdown;
// 	}
// 	}, 1000);