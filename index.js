
//set both dices to 6
document.querySelector(".img1").setAttribute("src","./images/dice6.png");
document.querySelector(".img2").setAttribute("src","./images/dice6.png");

//set random numbers
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

//set dice name
var dice1= "dice"+randomNumber1+".png";
var dice2= "dice"+randomNumber2+".png";

//place this image inside the <img> element
document.querySelector(".img1").setAttribute("src","./images/"+dice1);
document.querySelectorAll("img")[1].setAttribute("src","./images/"+dice2);



//set conditions
if(randomNumber1>randomNumber2)
    {
document.querySelector("h1").innerHTML="Player 1 Wins!";
    };

if(randomNumber1<randomNumber2)
    {
document.querySelector("h1").innerHTML="Player 2 Wins!";
    };
if(randomNumber1===randomNumber2)
    {
document.querySelector("h1").innerHTML="Draw!";
    }

