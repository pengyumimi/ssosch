//check login info
var username = sessionStorage.getItem('username');
if( username == "" || username == null){
	window.location.href = "login.html";
}