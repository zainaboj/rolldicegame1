
///Zainab Aljedaani   CS665    ROllDIce Game -->>

RoleDice();
function RoleDice ()
 {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".image1").setAttribute("src", "Dice"+randomNumber1 + ".png");
document.querySelector(".image2").setAttribute("src","Dice"+randomNumber2 + ".png");
  if (randomNumber1 > randomNumber2)
          {playAudio();
          //  document.querySelector("text").innerHTML = ("Player1 WINS!");
         document.getElementById("text").innerHTML = ("The winner player1  ");
          }
else {
    if(randomNumber2 > randomNumber1)
        {playAudio();
        document.getElementById("text").innerHTML = ("The winner player2  ");
        }
    else{
      //document.querySelector("#text").innerHTML = "Hello World!";
     document.getElementById("text").innerHTML = ("Play Again  ");
        }
}
}
function playAudio() {
  var audio = new Audio('sound.wav');
  audio.play();
}
