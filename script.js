
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
      if((`${questions[this.currentQuestion].options[i]}`) === `${questions[game.currentQuestion].answer}`){
        $('.answerButton').addClass('correctAnswer')
      }
    }

},
answer: function (){
    alert("Correct!\n+100");
    game.currentQuestion += 1;
     game.score = game.score + 100;
    $(".score").html(game.score)

 }

 };

$(".play").on("click", game.home.bind(game));
$(".answerButton").on("click", function(){
  if($('.answerButton').hasClass('correctAnswer')){
    console.log("working");
  }else{
    console.log($('this').text());
  }
})
//$(".answerButton").on("click", game.answer.bind(game));
