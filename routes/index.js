var data = require('../public/tasks.json')
exports.view = function(req,res){
    
	res.render('index');
}

exports.viewHome = function(req,res){
    //data["viewAlt"] = false;
	res.render('home',data);
	//console.log(data.tasks);
}

exports.viewHomeAlt = function(req,res){
    data["viewAlt"] = true;
	res.render('home',data);
}