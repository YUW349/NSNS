
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