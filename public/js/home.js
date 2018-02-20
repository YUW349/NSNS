'use strict';











$(document).ready(function() {
	initializePage();
})

/*
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

$.get("../../tasks.json",function(data){

	data.splice(projectId,1);
})
	}

function goBack(){
	var returnlink = "../../views/index";
				window.history.go(-100);
			}
/*
$('.deletingTask').click(function(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
  
	parent.removeChild(item);



	})
*/

/*		$('.menu').toggleClass('active');
	})*/