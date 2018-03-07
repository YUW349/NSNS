'use strict';

$(document).ready(function() {
	initializePage();

})

/*
var data = JSON.parse(this.responseText);
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.deletingTask').click(remove);
    $('.notification').click(analytics);
    $('.edit').click(editTask);
    $('#addTaskk').click(showAdd);
　　 $('.addButton').click(collectTimeA);
	$('.btn.btn-default').click(collectTimeB);
	console.log($('.btn.btn-default'));
	//$('#colorBtn').click(randomizeColors);
}

var startTime;

function collectTimeA(e){

	startTime = new Date();
	startTime = startTime.getTime();
	console.log("startTime is the " + startTime);
}

var endTime;

function collectTimeB(e){
	console.log("startTime is the " + startTime);
	endTime = new Date();
	endTime = endTime.getTime();
	console.log("endTime is the " + endTime);
	var duration = endTime - startTime;
	ga("send","event","duration","click",duration);
	console.log("duration is " + duration);
}



function cancel(e){
	var introBar = document.getElementsByClassName("intro")[0];
	introBar.style.display = 'none';
}

function showAdd(e){
	var introBar = document.getElementsByClassName("intro")[0];
	introBar.style.display = 'block';
}

function editTask(e){

	e.preventDefault();
    var projectID = $(this).closest('.tasks').attr('id');
}

function analytics(e){
        // e.preventDefault();
		ga("send","event","input","click");
		console.log("u suck");
	}

function remove(e){
	e.preventDefault();
  	var projectId = $(this).closest('.tasklist').attr('id');
	console.log(projectId);


 
if (confirm("Delete the task?")) {
    alert("Task deleted!");
    var item = this.parentNode.parentNode;
	var parent = item.parentNode;
    parent.removeChild(item);
} else {
    var txt = "Task remained!";
}

	}

function goBack(){
	
				window.history.back();
			}


//show intro only when no tasks present
//var introBar = document.getElementsByClassName("intro")[0];
//var taskLength = document.getElementsByClassName("tasklist").length;
//if(taskLength > 0) {
//	introBar.style.display = 'none';
//}


var x = setInterval(function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "../tasks.json";

	xmlhttp.open("GET", url, false);
	xmlhttp.send();

	//console.log(xmlhttp.responseText);
	var data = JSON.parse(xmlhttp.responseText);
	//console.log(data);
	xmlhttp.abort();
	var tasks = document.getElementsByClassName('tasklist');
	console.log(tasks);
	var times = [];
	console.log(times);
	// var data = require("../../tasks.json");
	var count = Object.keys(tasks).length ;
	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	for(var i = 0; i< count; i++){
		times.push(tasks[i].getElementsByTagName('p')[1].innerHTML);
	}
	// Display the result in the element with id="demo"
	// If the count down is finished, write some text 
	for(var i = 0; i< count; i++){	
		var countDownDate = new Date("Mar 16, 2018 " + times[i]).getTime();
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if(distance<0){
			var countdown = "TIME UP";
			}else{
			var countdown = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
			}
		var main = document.getElementById(tasks[i].getAttribute('id'));
		main.getElementsByTagName('div')[0].innerHTML = countdown;
	}
	}, 1000);
/*
$('.deletingTask').click(function(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
  
	parent.removeChild(item);



	})
*/

/*		$('.menu').toggleClass('active');
	})*/