
// Insterting random color for an emptyy array
var gamePattern = [];
var userClickPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = true;
var level = 0;
// Function for random number
function nextSequence(){
  level++;
  var randomNumber = Math.random();
  randomNumber*=4;
  randomNumber=Math.floor(randomNumber);
  randomChosenColor =buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").html("level "+level);
  userClickPattern=[];
  }


$(document).on("keypress",function(){
  if(started){
    $("h1").html("Level 0");
    nextSequence();
  };
  started = false;
});





  // $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  // Method 1
  // var audio = new Audio("sounds/"+randomChosenColor+".mp3");
  // audio.play();

// function that responsible for the user inputs
$(".btn").on("click",function(){
  var userChosenColor = $(this).attr("id");
  console.log($(this).attr("id"));
  userClickPattern.push(userChosenColor);
  playSound($(this).attr("id"));
  animatePress(this);
  checkAnswer(userClickPattern.length-1);

});

// function that plays sounds

function playSound(name){
  switch (name) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    default:
    console.log($("#" + randomChosenColor));
}
}
// function for the pressing animation
function animatePress(currentColor){
  $(currentColor).addClass("pressed");
  setTimeout(function(){$(currentColor).removeClass("pressed");},100);
}

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]==userClickPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length == userClickPattern.length){
    setTimeout(nextSequence,1000);
    }
  }else{
    console.log("wrong");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = true;

  }
