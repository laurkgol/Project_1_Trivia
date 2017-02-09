// Great use of data structures and semantic naming conventions to organize your questions!
var questions = [
  {
    round: 1,
    questionText: "Select the iconic DC building pictured below.",
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
    questionText: "Select the iconic DC building pictured below.",
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
    questionText: "Select the iconic DC building pictured below.",
    questionImage: "images/ArenaStage.jpg",
    options: [
      "Lincoln Theater",
      "Ford's Theater",
      "Arena Stage"
    ],
    answer: "Arena Stage"
  },
  {
    round: 1,
    questionText: "Select the iconic DC building pictured below.",
    questionImage: "images/ScottishRite.jpg",
    options: [
      "National Cathedral",
      "Scottish Rite of Freemasonry",
      "Arena Stage"
    ],
    answer: "Scottish Rite of Freemasonry"
  },
  {
    round: 1,
    questionText: "Select the iconic DC location pictured below.",
    questionImage: "images/arboretum.jpg",
    options: [
      "Capitol Columns at the National Arboretum",
      "National Capitol",
      "Shrine of the Emmaculate Conseption"
    ],
    answer: "Capitol Columns at the National Arboretum"
  },
  {
    round: 1,
    questionText: "Select the iconic DC location pictured below.",
    questionImage: "images/arboretum.jpg",
    options: [
      "Capitol Columns at the National Arboretum",
      "National Capitol",
      "Shrine of the Emmaculate Conseption"
    ],
    answer: "Capitol Columns at the National Arboretum"
  }
]
// Good job using an object literal to make your code more modular
var game = {
  score: 0,
  currentQuestion:0,
  // Maybe rename this method to something more semantically accurate like
  // beginGame (since your homescreen is already on the screen before this method is activated)
  home: function (){
    $(".home").css("display", "none");
    $("#roundOne").css("display", "block")
    $(".question").css("display", "block")
    $('.question-text').text(`${questions[this.currentQuestion].questionText}`)
    $('.question-image').attr('src',`${questions[this.currentQuestion].questionImage}`)
    // Great use of a loop to populate the DOM with data from your data structure
     for(var i = 0; i < `${questions[this.currentQuestion].options.length}`; i++){
      $('.answerButton').eq(i).text(`${questions[this.currentQuestion].options[i]}`);
      var questionAttachedToButton = `${questions[this.currentQuestion].options[i]}`
      // Remove console.logs when you push to production
      if(questionAttachedToButton === questions[this.currentQuestion].answer){
        $('.answerButton').eq(i).addClass("correctAnswer");
        // Make sure to remove unused / old code from scripts before pushing to production
      }
    }
  }
};

$(".play").on("click", game.home.bind(game));
// Good job using .bind to maintain the correct context while triggering an event listener
$(".answerButton").on("click", function(){
  if($(this).hasClass('correctAnswer')){
    // Maybe instead of using a CSS class to mark which answer is correct, you could retrieve
    // the .text() from the button that was clicked and compare it with the answer in your
    // data structure (both are fine, but it would be a slighly more programmatic approach)
    alert("Correct!\n+100");
     game.score = game.score + 100;
     game.currentQuestion += 1;
    $(".score").html(game.score)
    // You could also break out the functionality for when a user gets the right answer
    // into a 'correctAnswer' method on the 'game' object
   }else{
    alert("Sorry, wrong answer");
     game.currentQuestion += 1;

  }
  $('.answerButton').removeClass("correctAnswer");

  // Maybe break the functionality below into an 'endOfQuiz' method on the 'game'
  // object that could be triggered when the condition is met (would add to code modularity)
  if(game.currentQuestion == questions.length - 1){
    $(".allQuestions").css("display", "none");
    $(".endofquiz").css("display", "block");
    if(game.score > 300){
      $("#over300").css("display", "block");
    } else{
      $("#under300").css("display", "block");
    }
  } else{
    game.home();
  }
})

// Overall, great code quality and finished product. Look for opportunities for breaking
// larger functions / methods up into smaller ones. Also, anywhere you have DOM elements
// that you reuse often in your code (such as $('.answerButton')), you could assign it to
// a variable and then just reference your variable in the rest of your code. This is good
// to do because it makes it easier to change your html / css classes and then only change
// one thing in your javascript, instead of having to update all the places you reference that
// DOM element.
