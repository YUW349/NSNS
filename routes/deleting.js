var data = require('../public/tasks.json');
exports.removetask = function(req,res){
	var count = Object.keys(data.tasks).length ;
	var index = count - 1;
	console.log(count);
	console.log(index);


var taskID = req.params.id;
taskID = parseInt(taskID);
var tasks = data.tasks[taskID];
console.log(data.tasks);
res.json(tasks);

if (taskID == index) {
	data.tasks.splice(taskID,1);
	//console.log(taskID);
}

else if (taskID < index) {

	for (i = taskID; i < index; i ++){
		j = data.tasks[i].id;
        k = data.tasks[i+1].id;
		console.log(k);
		data.tasks[i+1].id = k -1;
			//console.log(j);
		
			console.log(data.tasks[i+1].id);

	}
     data.tasks.splice(taskID,1);

	  }


      //count = Object.keys(data.tasks).length ;
	  //console.log(count);

}
