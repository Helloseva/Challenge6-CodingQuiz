//global variables//
var time = 75;
var score = 0;
var question = document.querySelector("#question");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var question6 = document.querySelector("#question6");


document.getElementById("startBtn").onclick = timer;

function timer() {
  var timerInterval = setInterval(function () {
    if (time > 0) {
      time--;
      document.getElementById("countdown").innerHTML = time;
    } else {
      //if time <=0 //
      question.className = "hide";
      question1.className = "hide";
      question2.className = "hide";
      question3.className = "hide";
      question4.className = "hide";
      question5.className = "show";

      clearInterval(timerInterval);
    }
  }, 1000);
}

// functions for hiding and showing questions //
question.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question.className = "hide";
    question1.className = "show";
  }
});

question1.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question1.className = "hide";
    question2.className = "show";
  }
});

question2.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question2.className = "hide";
    question3.className = "show";
  }
});

question3.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question3.className = "hide";
    question4.className = "show";
  }
});

//function for quiz timer//  //when time runs out, the game is over & page6 appears with final score//
question4.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question4.className = "hide";
    question5.className = "show";
    // Saves score, stops timer, show the final score //
    score = time;
    document.getElementById("score").innerHTML =
      "Nice! Your Final score is: " + score;
    time = 10;
  }
});

//add event listener for page6//
question5.addEventListener("click", function (event) {
  if (event.target === document.getElementById("submit")) {
    question5.className = "hide";
    question6.className = "show";
  }
});

// functions for  feedback //
var correct = document.querySelectorAll(".correct");
var correctText = document.getElementById("correct");
var correctAnswers = 0;

for (var i = 0; i < correct.length; i++) {
  correct[i].addEventListener("click", function () {
    correctAnswers++;
    console.log(correctAnswers);
    correctText.className = "show";
    setTimeout(function () {
      correctText.className = "hide";
    }, 1000);
  });
}

var wrong = document.querySelectorAll(".wrong");
var wrongText = document.getElementById("wrong");

for (var i = 0; i < wrong.length; i++) {
  wrong[i].addEventListener("click", function () {
    wrongText.className = "show";
    setTimeout(function () {
      time = time - 10;
      wrongText.className = "hide";
    }, 1000);
  });
}

//creating event listeners to make the buttons on question6 work//
var tryAgain = document.getElementById("tryAgain");
var question6 = document.querySelector("#question6Container");
tryAgain.addEventListener("click", function () {
  question6.className = "hide";
  question.className = "show";
  time = 75;

  document.getElementById("countdown").innerHTML = "";
  document.getElementById("saveInitials").value = "";
});

var clearHighScore = document.getElementById("clearHighScore");
clearHighScore.addEventListener("click", function () {
  localStorage.clear();
  userHighScore.textContent = "";
});

//save to local storage//
var submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  var inputValue = document.getElementById("saveInitials").value;
  var localStorageName = "userScore";
  var userScore = {
    initials: inputValue,
    score: score,
  };
  localStorage.setItem(localStorageName, JSON.stringify(userScore));
  var userHighScore = document.getElementById("userHighScore");
  var localStorageValues = JSON.parse(localStorage.getItem(localStorageName));
  console.log("localStorageValues", localStorageValues);
  userHighScore.textContent =
    "" + localStorageValues.initials + ", " + localStorageValues.score;
});