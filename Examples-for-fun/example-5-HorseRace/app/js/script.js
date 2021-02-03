// elems
const horse1 = document.getElementById("horse1");
const horse2 = document.getElementById("horse2");
const horse3 = document.getElementById("horse3");
const horse4 = document.getElementById("horse4");

const finish = document.querySelector(".finish").offsetLeft + 200;

const btn = document.querySelector("button");
const alert = document.querySelector(".alert");

// elems end

// get random number
function getRandomNum() {
  let rnd;
  do {
    rnd = Math.floor(Math.random() * 100);
  } while (rnd < 50);
  return rnd;
}
// get random number end

// variables
let hrs1 = 0,
  hrs2 = 0,
  hrs3 = 0,
  hrs4 = 0,
  flag = false;
// variables end

// Horse ONE
function horseOne() {
  if (hrs1 < finish) {
    hrs1 += getRandomNum();
    horse1.style.marginLeft = hrs1 + "px";
  } // if end
  else {
    if (!flag) {
      flag = true;
      alert.textContent = "Horse 1 won the race!";
      alert.classList.add("alert-active");
    } // if end
    clearInterval(raceInterval);
  } // else end
}
// Horse ONE End

// Horse Two
function horseTwo() {
  if (hrs2 < finish) {
    hrs2 += getRandomNum();
    horse2.style.marginLeft = hrs2 + "px";
  } // if end
  else {
    if (!flag) {
      flag = true;
      alert.textContent = "Horse 2 won the race!";
      alert.classList.add("alert-active");
    } // if end
    clearInterval(raceInterval);
  } // else end
}
// Horse Two end

// Horse Three
function horseThree() {
  if (hrs3 < finish) {
    hrs3 += getRandomNum();
    horse3.style.marginLeft = hrs3 + "px";
  } // if end
  else {
    if (!flag) {
      flag = true;
      alert.textContent = "Horse 3 won the race!";
      alert.classList.add("alert-active");
    } // if end
    clearInterval(raceInterval);
  } // else end
}
// Horse Three end

// Horse Four
function horseFour() {
  if (hrs4 < finish) {
    hrs4 += getRandomNum();
    horse4.style.marginLeft = hrs4 + "px";
  } // if end
  else {
    if (!flag) {
      flag = true;
      alert.textContent = "Horse 4 won the race!";
      alert.classList.add("alert-active");
    } // if end
    clearInterval(raceInterval);
  } // else end
}
// Horse Four end

// start
const start = () => {
  raceInterval = setInterval(() => {
    horseOne();
    horseTwo();
    horseThree();
    horseFour();
  }, 500);
};
// start end

btn.addEventListener("click", start);
