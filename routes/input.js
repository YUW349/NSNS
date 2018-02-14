var data = require("../tasks.json");
exports.addNewTask = function(req,res){
	var taskname = req.query.taskname;
	var time = req.query.time;
	var time2 = req.query.time2;
	var time3 = req.query.time3;
	var location = req.query.location;
	
	var newTask = {
              "taskname" : "Task Name: " + taskname,
              "time" : "Time: " + time+time2+time3,
              "location" : "Location: " + location,
              

	}

	console.log(newTask);
    data.tasks.push(newTask);
    console.log(data);
    res.render('index',data)
}