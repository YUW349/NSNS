'use strict';

$(document).ready(function() {
	initializePage();
})
var xmlhttp = new XMLHttpRequest();
var url = "../tasks.json";
    
xmlhttp.open("GET", url, false);
xmlhttp.send();
console.log(xmlhttp.responseText);
var data = JSON.parse(xmlhttp.responseText);
console.log(data);
/*
var data = JSON.parse(this.responseText);
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.deletingTask').click(remove);

	//$('#colorBtn').click(randomizeColors);
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

$.get("../tasks.json",function(data){

	data.splice(projectId,1);
})
	}

function goBack(){
	
				window.history.back();
			}


//show intro only when no tasks present
var introBar = document.getElementsByClassName("intro")[0];
var taskLength = document.getElementsByClassName("tasklist").length;
if(taskLength > 0) {
	introBar.style.display = 'none';
}

var x = setInterval(function() {

	console.log(data);
	// var data = require("../../tasks.json");
	var count = Object.keys(data.tasks).length ;
	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	

	// Display the result in the element with id="demo"
	// If the count down is finished, write some text 
	for(var i = 0; i< count; i++){

		var countDownDate = new Date("Feb 23, 2018 " + data.tasks[i].time).getTime();
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

		data.tasks[i].countdown = countdown;
		var main = document.getElementById(data.tasks[i].id);
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