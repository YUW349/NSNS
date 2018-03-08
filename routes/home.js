
/*
 * GET home page.
 */
var data = require('../public/tasks.json');
var data2 = require('../accountInfo.json');


exports.login = function(req,res){
   var userName = req.query.userName;
   var passWord = req.query.password;
   var count = Object.keys(data2.accountInfo).length  ;
   var newAccountInfo = {
                    "userName" : userName,
                    "password" : passWord,
                    "id" : count
   } 

   data2.accountInfo.push(newAccountInfo);
   console.log(newAccountInfo);

  res.render('home',{

    "welcome" : "welcome to the reminder " + userName +"!"
  });
}



exports.addNewTask = function(req,res){
  var taskname = req.query.taskname;
  var time = req.query.time;
  var time2 = req.query.time2;
  var time3 = req.query.time3;
  var location = req.query.location;
  var count = Object.keys(data.tasks).length ;

  var countDownDate = new Date("Mar 7, 2018 " + time + time2 + time3).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    console.log(distance);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(distance<=0){
            var countdown = "TIME UP";
            
        }else{
        var countdown = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }



    /*var audio = new Audio("");
    audio.src = '/sonosaki.mp3';*/
    
    
  var newTask = { 
              "taskname" : "Task Name: " + taskname,
        "time" : time+time2+time3,
        "countdown" : countdown,
        "location" : "Location: Price Center " ,
        "id" : count,
        "onsetTime" : distance,
        "soundAlt" : false

    }

  /*var x = document.getElementById("myAudio"); 

    function playAudio() { 
    x.play(); 
  } */

    
  //console.log(newTask);
    data.tasks.push(newTask);
    //console.log(data);

    res.render('home',data);
};



/*exports.removeTask = function(req,res){

    var projectId = req.params.id;
    projectId = parseInt(projectId);
    console.log(projectId);
    data.tasks.splice(projectId,1);
    console.log(data);

    res.render('home',data);
}*/
