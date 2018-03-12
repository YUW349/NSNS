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
 
    $('.editingTask').click(editingTask);
    $('#addTaskk').click(showAdd);
	//$('#colorBtn').click(randomizeColors);
}

function cancelTask(e){
	var introBar = document.getElementsByClassName("intro")[0];
	introBar.style.display = 'none';
}

function showAdd(e){
	var introBar = document.getElementsByClassName("intro")[0];
	introBar.style.display = 'block';
}

function editingTask(e){
	// Prevent following the link
	e.preventDefault();
	var taskID = $(this).closest('.tasklist').attr('id');
	console.log(" this is edit: User clicked on task " +  taskID);
	$.get("/tasks/" + taskID, callback);
	console.log(" this is edit: task" + taskID);
}

function callback(result){
console.log(result);
var taskHTML = '<form id="editingForm" role = "form" method="get" action="/home">' + '<br>' +
               '<div class ="taskname">' +
               '<label for="taskname">' + '<h4>' + "delete " + result.taskname+ '</h4>'+ '</label>' + 
               //'<input type="text" id="taskname" value="' +result.taskname+ ' " name="taskname" required">' +
               '</div>' + '<br>'+

             

              '<input type="submit" id="submitB" class="deletingTask" value="delete">'+
              

          
             '<br>'

               '</form>'






                document.getElementById(result.id).innerHTML =  taskHTML;

}



function remove(e){
	e.preventDefault();
  	var taskID = $(this).closest('.tasklist').attr('id');
	$.get("/tasks/" + taskID, callback2);
	console.log("task" + taskID);

	}

function callback2(result2){
  var targetList = "#" + result2.id;	
  console.log(targetList);
    alert("1. Task deleted!\n2. Please logout or add a new task to rerender the page after you deleted the task to avoid the error.\n3. Sorry for you cannot cancel the delete. we don't know how to code it!");
   $(targetList).remove();

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
		var countDownDate = new Date("Mar 9, 2018 " + times[i]).getTime();
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if(distance<0){
			var countdown = "TIME UP";
			$(".countdown").css({'color' : 'red'});
			}else{
			var countdown = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
			}
		var main = document.getElementById(tasks[i].getAttribute('id'));
		main.getElementsByTagName('div')[0].innerHTML = countdown;
	}
	}, 1000);
/**

function remove(e){
	e.preventDefault();
  	var taskID = $(this).closest('.tasklist').attr('id');
 
if (confirm("Delete the task?")) {
    alert("Task deleted!");
    var item = this.parentNode.parentNode;
	var parent = item.parentNode;
    parent.removeChild(item);
} else {
    var txt = "Task remained!";
}


	console.log("task" + taskID);

	}**/