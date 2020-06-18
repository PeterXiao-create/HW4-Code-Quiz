// create variables to reference elements
var timeEl = document.querySelector(".time");

// create variable to track seconds remaining. Total scores of 100.
var secondsLeft = 100;

// function to start the countdown
function setTime() {
    // start countdown. setInterval needs two arguments:
    // a function and the number of milliseconds for the delay.
    // setInterval returns an identifier for the interval which can
    // be used to reference the interval. (allows us to stop it)
    var timeInterval = setInterval(function () {
        // each interval we....

        // decrement time remaining
        secondsLeft--;

        // update the remaining time
        timeEl.textContent = "Time: " + secondsLeft;

        // check if time has run out
    if(secondsLeft === 0) {
        // stop the interval by passing the identifier returned by setInterval to
        // the clearInterval method.
        clearInterval(timeInterval);
    }
},1000)
};
setTime();



var questions = [
    {
        question: "What is first index of an array?",
        choices: ["5", "2", "0", "1"],
        answer: "0",
    },
    {
        question: "which of the following tag is used to mark a begining of paragraph?",
        choices: ["<TD>", "<br>", "<p>", "<TR>"],
        answer: "<p>",
    },
    {
        question: "www is based on which model?",
        choices: ["Local-server", "Client-server", "3-tier", "None of these"],
        answer: "Client-server",
    },
    {
        question: "Which of the following attributes of text box control allow to limit the maximum character?",
        choices: ["size", "len", "maxlength", "all of these"],
        answer: "maxlength",
    },
];
var currentQuestionIndex = 0;
var questionContainer = document.querySelector("#question");
// create a function called showQuestion
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var choices = currentQuestion.choices;
  // remove previous question
  questionContainer.innerHTML = "";
  // add an h3 to show the question text
  var h3 = document.createElement("h3");
  h3.textContent = currentQuestion.question;
  questionContainer.appendChild(h3);
  // create a button for each choice
  for (var i = 0; i < choices.length; i += 1) {
    var button = document.createElement("button");
    button.textContent = choices[i];
    questionContainer.appendChild(button);
  }
}
showQuestion();
questionContainer.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    var answer = event.target.textContent;
    if (answer === questions[currentQuestionIndex].answer) {
      alert("got it right");
    } else {
      alert("got it wrong");
    }
  }
  currentQuestionIndex += 1;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    alert("quiz is over");
  }
});
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function () {
  showQuestion();
});