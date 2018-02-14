
/*
 * GET home page.
 */
var data = require('../tasks.json')
exports.view = function(req, res){
  res.render('index',data);
};

