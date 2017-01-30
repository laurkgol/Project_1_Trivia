console.log("hello");

var game = {
  score: 0,
  home: function (){
    $(".home").css("display", "none");
    $(".roundOne").css("display", "block")
  },
  correctAnswer: function (){
    alert("Correct!\n+100");
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("display", "block");
     game.score += 100;
    $(".score").text(game.score)

  },
}

$(".play").on("click", game.home.bind(game));
$(".correct").on("click", game.correctAnswer.bind(game));
