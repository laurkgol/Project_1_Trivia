
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
  },
  {
    round: 1,
    questionText: "Name the iconic DC building pictured below",
    questionImage: "images/ArenaStage.jpg",
    options: [
      "Lincoln Theater",
      "Ford's Theater",
      "Arena Stage"
    ],
    answer: "Arena Stage"
  }
]

var game = {
  score: 0,
  currentQuestion: 2,
  home: function (){
    $(".home").css("display", "none");
    $("#roundOne").css("display", "block")
    $(".question").css("display", "block")
    $('.question-text').text(`${questions[this.currentQuestion].questionText}`)
    $('.question-image').attr('src',`${questions[this.currentQuestion].questionImage}`)
     for(var i = 0; i < `${questions[this.currentQuestion].options.length}`; i++){
      $('.answerButton').eq(i).text(`${questions[this.currentQuestion].options[i]}`);
      var questionAttachedToButton = `${questions[this.currentQuestion].options[i]}`
      console.log(questionAttachedToButton)
      if(questionAttachedToButton === `${questions[game.currentQuestion].answer}`){
        // console.log(`${questions[this.currentQuestion].options[i]}`)
        //console.log($('answerButton').eq(i).text())

        $('.answerButton').eq(i).addClass('correctAnswer')
      }
    }

}

 };

$(".play").on("click", game.home.bind(game));
$(".answerButton").on("click", function(){
  if($('.answerButton').hasClass('correctAnswer')){
    alert("Correct!\n+100");
     game.score = game.score + 100;
     game.currentQuestion += 1;
     console.log(game.currentQuestion)
    $(".score").html(game.score)
  }else{
    alert("Sorry, wrong answer");
     game.currentQuestion += 1;
  }
})
//$(".answerButton").on("click", game.answer.bind(game));
