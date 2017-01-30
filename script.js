
var questions = [
  {
    round: 1,
    questionText: "Name the iconic DC building pictured below",
    questionImage: "images/ExecutiveOfficeBuilding.jpg",
    options: [
      "Executive Office Building",
      "Treasury Department",
      "National Portrait Gallery"
    ],
    answer: "Executive Office Building"
  },
  {
    round: 1,
    questionText: "Name the iconic DC building pictured below",
    questionImage: "images/LincolnCottage.jpg",
    options: [
      "Fort McNair",
      "Lincoln's Cottage",
      "Marine Barracks"
    ],
    answer: "Lincoln's Cottage"
  }
]

var game = {
  score: 0,
  currentQuestion: 0,
  home: function (){
    $(".home").css("display", "none");
    $("#roundOne").css("display", "block")
    $(".question").css("display", "block")
    $('.question-text').text(`${questions[this.currentQuestion].questionText}`)
    $('.question-image').attr('src',`${questions[this.currentQuestion].questionImage}`)
     for(var i = 0; i < `${questions[this.currentQuestion].options.length}`; i++){
      $('.answerButton').eq(i).text(`${questions[this.currentQuestion].options[i]}`);
    }

},
answer: function (){
      if(`${questions[this.currentQuestion].answer}` == $(".answerButton").clicked.html())

    alert("Correct!\n+100");
    this.currentQuestion += 1;
     game.score = game.score + 100;
    $(".score").html(game.score)

 },
  incorrectAnswer: function(){
    alert("Sorry, wrong answer.");
    $("#questionOne").css("display", "none");
    $("#questionTwo").css("display", "block");
 }
 }

$(".play").on("click", game.home.bind(game));
$(".correct").on("click", game.answer.bind(game));
$(".incorrect").on("click", game.incorrectAnswer.bind(game));
