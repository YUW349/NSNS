var data = require('../public/tasks.json')
exports.view = function(req,res){
    
	res.render('index');
}

exports.viewHome = function(req,res){

	res.render('home',data);
}