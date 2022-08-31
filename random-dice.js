// alert("hello dice");
var randomNumber_P1 = 1 + Math.floor(Math.random()*6);
var selectedDice_P1 = "images/dice" + randomNumber_P1 + ".png";
// alert(selectedDice_P1);
var randomNumber_P2 = 1 + Math.floor(Math.random()*6);
var selectedDice_P2 = "images/dice" + randomNumber_P2 + ".png";
// alert(selectedDice_P2);

// update dice
document.querySelector("img.img1").setAttribute("src", selectedDice_P1);
document.querySelector("img.img2").setAttribute("src", selectedDice_P2);

// find winner & update header
if(randomNumber_P1 > randomNumber_P2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber_P1 < randomNumber_P2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
