var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
// 用query選取class時需要加dot
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// function initialColor(){
// 	var body = window.getComputedStyle(body,null).getPropertyValue("background-color");
// 	console.log(body);
// }

function setGradient(){

	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"
}
// color1.value is a string, so we use "" to concatenate
// DOM one way of changing color: body.style.background = "pink";

function getRandomColor() {

  	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

// Math.floor(Math.random()*16); return 0 or 1...or 15

function randombackground(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randombackground);