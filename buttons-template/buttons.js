var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var bg = document.getElementById('bg');
var img = document.getElementsById('img');

btn1.onclick= function(){
	bg.src= "bg1.jpg";
	img.src="1.jpg";
}

btn2.onclick= function(){
	bg.src= "bg2.jpg";
	img.src="2.jpg";
}
btn3.onclick= function(){
	bg.src= "bg3.jpg";
	img.src="3.jpg";
}