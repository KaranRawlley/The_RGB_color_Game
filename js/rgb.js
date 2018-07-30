var	colors	=	generateRandomColors(6);

var	square	=	document.querySelectorAll(".square");
var	pickedColor	=	pickColor(6);
var	colorDisplay	=	document.getElementById("currentColor");
colorDisplay.textContent	=	pickedColor;
var result	=	document.querySelector("#result");	
var	h1	=	document.querySelector("h1");
var	b1	=	document.querySelector("#b1");
var b2	=	document.querySelector("#b2");
var b3	=	document.querySelector("#b3");
var easy	=	document.querySelector("#easy");
var	flag	=	1;

for(var	i=0;i<square.length;i++)
{
	square[i].style.background	=	colors[i];

	square[i].addEventListener("click",	function(){

		var clickedColor	=	this.style.background ;

		if(clickedColor	===	pickedColor){
			result.textContent	=	"Correct";
			correctColor(clickedColor);
			h1.style.background=clickedColor;
			b1.textContent="Play Again"

			
		}else{
			this.style.background	=	"#232323";
			result.textContent	=	"Try Again";
		}
	});
}

function	correctColor(color)
{
	for(var	i=0;i<colors.length;i++)
	{
		square[i].style.background	=	color;
	}
}


function	pickColor(num)
{
	var	random 	=	Math.floor(Math.random()*num);
	return	colors[random];

}


function	generateRandomColors(num)
{
	var	arr	=	[];
	for(var	i=0;i<num;i++)
	{
		arr.push(randomColor());

	}

	return	arr;
}

function	randomColor()
{
	var	r =	Math.floor(Math.random()*256);
	var	g =	Math.floor(Math.random()*256);
	var	b =	Math.floor(Math.random()*256);
	return	"rgb("+	r +", " + g + ", " + b + ")";
}

b1.addEventListener("click",	function(){

if(flag)
{
		colors=generateRandomColors(6);
	for(var	i=0;i<square.length;i++)
   {
	square[i].style.background	=	colors[i];
   }
	pickedColor	=	pickColor(6);
	colorDisplay.textContent	=	pickedColor;
	h1.style.background="steelblue"; 
	result.textContent="";
	b1.textContent="New Colors"; 
}else{
		colors=generateRandomColors(3);
	for(var	i=0;i<square.length;i++)
{
	square[i].style.background	=	colors[i];}
	pickedColor	=	pickColor(3);
	colorDisplay.textContent	=	pickedColor;
	h1.style.background="steelblue"; 
	result.textContent="";
	b1.textContent="New Colors"; 
}

});

b2.addEventListener("click",	function(){
	b3.classList.remove("selected");
	b2.classList.add("selected");
	colors	=	generateRandomColors(3);
	pickedColor	=	pickColor(3);
	colorDisplay.textContent	=	pickedColor;
	h1.style.background	=	"steelblue";
	flag	=	0;
	for(var	i=0;i<square.length;i++)
{
	if(colors[i])
	{
		square[i].style.background	=	colors[i];
	}else{
		square[i].style.background	=	"none";
	}
}
     


});

b3.addEventListener("click",	function(){
	b2.classList.remove("selected");
	b3.classList.add("selected");
	colors	=	generateRandomColors(6);
	pickedColor	=	pickColor(6);
    colorDisplay.textContent	=	pickedColor;
    h1.style.background	=	"steelblue";
    flag	=	1; 
	for(var	i=0;i<square.length;i++)
{
	square[i].style.background	=	colors[i];
}

});



























 	 




