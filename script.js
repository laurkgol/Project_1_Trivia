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
     game.score = game.score + 100;
    $(".score").html(game.score)

  },
  incorrectAnswer: function(){
    alert("Sorry, wrong answer.");
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("display", "block");
  }
}

$(".play").on("click", game.home.bind(game));
$(".correct").on("click", game.correctAnswer.bind(game));
$(".incorrect").on("click", game.incorrectAnswer.bind(game));
