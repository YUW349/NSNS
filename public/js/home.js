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
               '<label for="taskname">' + '<h4>' + "Task Name" + '</h4>'+ '</label>' + 
               '<input type="text" id="taskname" value="' +result.taskname+ ' " name="taskname" required">' +
               '</div>' + '<br>'+

               '<div class="time">' +
               '<label for="time">' + '<h4>' + 'Time (Hour:Minute:Second)' + '</h4>' + '</label>'+ '<br>' +
               '<select id="time" name="time" value="' + result.time1 + '">' +
               '<option value="00:">' + 'AM 12' +'</option>' +
               '<option value="01:">' + 'AM 01' +'</option>' +
               '<option value="02:">' + 'AM 02' +'</option>' +
               '<option value="03:">' + 'AM 03' +'</option>' +
               '<option value="04:">' + 'AM 04' +'</option>' +
               '<option value="05:">' + 'AM 05' +'</option>' +
               '<option value="06:">' + 'AM 06' +'</option>' +
               '<option value="07:">' + 'AM 07' +'</option>' +
               '<option value="08:">' + 'AM 08' +'</option>' +
               '<option value="09:">' + 'AM 09' +'</option>' +
               '<option value="10:">' + 'AM 10' +'</option>' +
               '<option value="11:">' + 'AM 11' +'</option>' +
               '<option value="12:">' + 'PM 12' +'</option>' +
               '<option value="13:">' + 'PM 01' +'</option>' +
               '<option value="14:">' + 'PM 02' +'</option>' + 
               '<option value="15:">' + 'PM 03'	+'</option>' + 
               '<option value="16:">' + 'PM 04' +'</option>' +
               '<option value="17:">' + 'PM 05' +'</option>' +
               '<option value="18:">' + 'PM 06' +'</option>' +
               '<option value="19:">' + 'PM 07' +'</option>' +
               '<option value="20:">' + 'PM 08' +'</option>' +
               '<option value="21:">' + 'PM 09' +'</option>' +
               '<option value="22:">' + 'PM 10' +'</option>' +
               '<option value="23:">' + 'PM 11' +'</option>' +
               '</select>' +
               ':'+
               '<select id="time2" name="time2">'+
               '<option value="00:">' + '00' + '</option>'+
               '<option value="05:">' + '05' + '</option>'+
               '<option value="10:">' + '10' + '</option>'+
               '<option value="15:">' + '15' + '</option>'+
               '<option value="20:">' + '20' + '</option>'+
               '<option value="25:">' + '25' + '</option>'+
               '<option value="30:">' + '30' + '</option>'+
               '<option value="35:">' + '35' + '</option>'+
               '<option value="40:">' + '40' + '</option>'+
               '<option value="45:">' + '45' + '</option>'+
               '<option value="50:">' + '50' + '</option>'+
               '<option value="55:">' + '55' + '</option>'+
               '</select>'+
               ':'+
               '<select id="time3" name="time3">' +
               '<option value="00">' + '00' + '</option>' +
               '<option value="30">' + '30' + '</option>' +
               '</select>'+
               '</div>'+ '<br>'+

               '<div class="location">' +
               '<label for="location">' + '<h4>' + 'Location' + '</h4>' + '</label>' + '<br>' +
               '<input type="text2" id="location" value = "Price Center" name="location" disabled>' +
               '<a href="/testmap.html">' + '<img id="locationPic" src = "/image/location.jpg" width="25" height="30">' +'</a>' + 
               '</div>' + '<br>' +

               '<div class="repeat">' +
               '<label for="repetition">' + '<h4>' + 'Reapeat' + '</h4>' + '</label>' + '<br>' +
               ' <input type="checkbox" id="S1" name="date" value="7">' + '<h5>' + 'Sun' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="1">' + '<h5>' + 'Mon' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="2">' + '<h5>' + 'Tue' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="3">' + '<h5>' + 'Wed' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="4">' + '<h5>' + 'Thu' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="5">' + '<h5>' + 'Fri' + '</h5>' +
               ' <input type="checkbox" id="S1" name="date" value="6">' + '<h5>' + 'Sat' + '</h5>' +
             '</div>' + '<br>' +

            
              '<input type="submit" id="submitB" class="btn btn-default" value="delete">'+

             '<input type="submit" id="submitB" class="btn btn-default" value="save">'+
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

function callback2(result){
  var targetList = "#" + result.id;	
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