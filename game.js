var squares = document.querySelectorAll(".square");
var nbSquares = 6;
var titleDisplay = document.querySelector("#titleDisplay");
var currentColor;
var msg = document.querySelector("#msg");
init();

function getRandom(max){
	return Math.floor(Math.random()*max) ;
}

function getRandomColor(){
	return "rgb("+getRandom(256)+", "+getRandom(256)+", "+getRandom(256)+")";
}

function generateRandomColors(arr){
	var arr = [];
	for (var i = 0; i < nbSquares; i++) {
		arr[i] = getRandomColor();
	}
	return arr;
}

function init(){
	var colors = generateRandomColors();
	currentColor = colors[getRandom(6)];
	titleDisplay.textContent = currentColor;
	for (var i = 0; i < nbSquares; i++) {
		squares[i].style.background=colors[i];

		squares[i].addEventListener("click" ,function(){
			  if(this.style.backgroundColor == currentColor){
					document.querySelector(".container-fluid").style.background = currentColor;
					for (let i = 0; i < nbSquares; i++) {
							squares[i].style.background=currentColor;
							msg.textContent = "Correct !";
					}
				}
				else{
					this.style.background = "#222222";
					msg.textContent = "Try Again!!!"
				}
		})
	}


	document.querySelector("#reset").addEventListener("click" , function(){
		init();
	})
	const easy = document.querySelector("#easy");
	easy.addEventListener("click" , function(){
		hard.classList.remove("selected");
		this.classList.toggle("selected");
	})
	const hard = document.querySelector("#hard");
	hard.addEventListener("click" , function(){
		easy.classList.remove("selected");
		this.classList.toggle("selected");
	})
}
