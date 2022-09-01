var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = 'dice' + randomNumber1 + ".png"; // dice1.png -dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);


// If player 1 Wins
if (randomNumber1 > randomImageSource2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "Draw!";
}