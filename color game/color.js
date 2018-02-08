//alert("hey");

var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numSquares=6;


easyBtn.addEventListener("click",function(){

h1.style.background="steelblue";
messageDisplay.textContent="";
resetButton.textContent="New Colors";
numSquares=3;
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
colors=generateRandomColors(3);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	if(colors[i]){
		squares[i].style.background=colors[i];
	}
	else
	{
		squares[i].style.background="none";
	}
}
});


hardBtn.addEventListener("click",function(){
h1.style.background="steelblue";
messageDisplay.textContent="";
resetButton.textContent="New Colors";
numSquares=6;
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");

colors=generateRandomColors(6);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	
		squares[i].style.background=colors[i];
	
		squares[i].style.background="block";
	
}
});

resetButton.addEventListener("click",function(){
//generate all new colors
colors=generateRandomColors(numSquares);
//pick a new random color
pickedcolor=pickcolor();
//changed color Display to match picked color
colorDisplay.textContent=pickedcolor;
this.textContent="New Colors";
//change colors of squares
messageDisplay.textContent="";
for( var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
}
h1.style.background="steelblue";
});


colorDisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{// add initial colors
	squares[i].style.background=colors[i];
	//ad click event

	squares[i].addEventListener("click",function() 
	{
		//grab color of picked square
		 var clickedColor = this.style.background;
		 
         if( pickedcolor === clickedColor){
         	messageDisplay.textContent="Correct";
         	changeColors(pickedcolor);
         	h1.style.background=pickedcolor;
            resetButton.textContent="Wanna Play Again ?";

         } 
         else {
          this.style.background="#232323";
          messageDisplay.textContent="Try Again";
         }
         
	}	);
}
function changeColors(color){
	//loop
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//for other two colors too
	var g=Math.floor(Math.random()*256);

	var b=Math.floor(Math.random()*256);
 //"rgb(r, g, b)"
return "rgb("+r+", "+g+", "+b+")" ;
}