var data = require('../userInformation.json')
exports.view = function(req,res){
    
	res.render('index');
}

exports.login = function(req,res){
   var userName = req.query.userName;
    data.userInformation.push(userName);
    console.log(data);
	res.render('home',{

		"userName" : "welcome to the reminder" + userName +"!"
	});
}