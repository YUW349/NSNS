function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
         //window.location.replace("/views/home");
  }
}

function changeUser(response) {
$(".facebookLogin").hide();
$(".username").hide();
$(".password").hide();
$("#privacypage").hide();
$("#name").text(response.name);
$("#logo").attr("src",response.picture.data.url);
document.getElementById('loginButton').style="margin-left: 82.5px;";
}