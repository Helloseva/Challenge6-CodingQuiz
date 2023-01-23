// global variables //
var time = 75;
var score = 0;
var quizPage = document.querySelector("#quizPage");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var quizPageEnd = document.querySelector("#quizPageEnd");
var quizPageHighScore = document.querySelector("#quizPageHighScore");
var gameOver = document.querySelector("#gameOver");
document.getElementById("startBtn").onclick = timer;

function endScreen() {
  quizPage.className = "hide";
  question1.className = "hide";
  question2.className = "hide";
  question3.className = "hide";
  question4.className = "hide";
  quizPageEnd.className = "show";
}

function timer() {
  var timerInterval = setInterval(function () {
    if (time > 0) {
      time--;
      document.getElementById("countdown").innerHTML = "Time: " + time;
    } else if (score > 0) {
      allDone.className = "show";
      endScreen();
      clearInterval(timerInterval);
    } else {
      gameOver.className = "show";
      endScreen();
      clearInterval(timerInterval);
    }
  }, 1000);
}


// functions for hiding and showing questions //
quizPage.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    quizPage.className = "hide";
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
question4.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    question4.className = "hide";
    quizPageEnd.className = "show";
    // saves score, stops timer, write score screen //
    score = time;
    document.getElementById("score").innerHTML = "Your Final score is " + score;
    time = 0;
  }
});
quizPageEnd.addEventListener("click", function (event) {
  if (event.target === document.getElementById("submit")) {
    quizPageEnd.className = "hide";
    quizPageHighScore.className = "show";
  }
});

// functions for  feedback //
var wrong = document.querySelector("#wrong");
var wrongBtns = document.querySelectorAll(".btnWrong");

for (var i = 0; i < wrongBtns.length; i++) {
  wrongBtns[i].onclick = function () {
    time -= 10;
    wrong.className = "show";
    setTimeout(function () {
      wrong.className = "hide";
    }, 1000);
  };
}

var correct = document.querySelector("#correct");
var correctBtns = document.querySelectorAll(".btnRight");

for (var i = 0; i < correctBtns.length; i++) {
  correctBtns[i].onclick = function () {
    correct.className = "show";
    setTimeout(function () {
      correct.className = "hide";
    }, 1000);
  };
}

// local storage //
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
  var highScoreSpan = document.getElementById("highScoreSpan");
  var localStorageValues = JSON.parse(localStorage.getItem(localStorageName));
  console.log("localStorageValues", localStorageValues);
  highScoreSpan.textContent =
    "" + localStorageValues.initials + ", " + localStorageValues.score;
});

var clearScores = document.getElementById("clearScores");
clearScores.addEventListener("click", function () {
  localStorage.clear();
  highScoreSpan.textContent = "";
});

var goBack = document.getElementById("goBack");
goBack.addEventListener("click", function () {
  quizPageHighScore.className = "hide";
  quizPage.className = "show";
  time = 75;
  document.getElementById("countdown").innerHTML = "";
});