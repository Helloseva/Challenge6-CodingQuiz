// variables for each page //
var page0 = document.querySelector("#page0");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var pageEnd = document.querySelector("#pageEnd");
var pageHighScores = document.querySelector("#pageHighScores");

// functions for timer, score, and game end if timer runs out //
var time = 75;
var score = 0;
var gameOver = document.querySelector("#gameOver");
document.getElementById("btn").onclick = timer;

function endScreen() {
  page0.className = "hide";
  page1.className = "hide";
  page2.className = "hide";
  page3.className = "hide";
  page4.className = "hide";
  pageEnd.className = "show";
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
page0.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      page0.className = "hide";
      page1.className = "show";
    }
  });
  
  page1.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      page1.className = "hide";
      page2.className = "show";
    }
  });
  
  page2.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      page2.className = "hide";
      page3.className = "show";
    }
  });
  page3.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      page3.className = "hide";
      page4.className = "show";
    }
  });
  page4.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      page4.className = "hide";
      pageEnd.className = "show";
      // saves score, stops timer, write score screen //
      score = time;
      document.getElementById("score").innerHTML = "Your Final score is " + score;
      time = 0;
    }
  });
  pageEnd.addEventListener("click", function (event) {
    if (event.target === document.getElementById("submit")) {
      pageEnd.className = "hide";
      pageHighScores.className = "show";
    }
  });
  