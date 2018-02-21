
/*
 * GET home page.
 */
var data = require('../tasks.json');
exports.view = function(req, res){
  res.render('home',data);
};

exports.login = function(req,res){
   var userName = req.query.userName;
  ;
	res.render('home',{

		"userName" : "welcome to the reminder " + userName +" !"
	});
}


/*exports.removeTask = function(req,res){

    var projectId = req.params.id;
    projectId = parseInt(projectId);
    console.log(projectId);
    data.tasks.splice(projectId,1);
    console.log(data);

    res.render('home',data);
}*/
