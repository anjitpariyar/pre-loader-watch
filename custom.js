var led;
var a=document.getElementById('cookie')
 function ready(){
 	a.style.display = "none";
 	localStorage.setItem('Cat', '1');
 	var led = localStorage.getItem('Cat');
 	console.log(led);
 }
 
// encodes the cookie as my%20name=John%20Smith
if(!localStorage.getItem('Cat')){
	a.style.display = "block";
	console.log('fuvk');
}