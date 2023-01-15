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