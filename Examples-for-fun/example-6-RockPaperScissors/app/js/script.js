// elems
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const choiceContainer = document.querySelector(".choice");
const botContainer = document.querySelector(".bot");
const resultContainer = document.querySelector(".result");

const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

const alert = document.querySelector(".alert");
// elems end

// variables
let choice = "",
  rnd = 0;

// variables end

// get option
function getOption(name) {
  choiceContainer.innerHTML = `<img src="img/${name}.png" alt="${name}"/>`;
  choice = name;
}
// get option end

// click events

// rock
rock.addEventListener("click", () => {
  getOption("rock");
});
// rock end

// paper
paper.addEventListener("click", () => {
  getOption("paper");
});
// paper end

// scissors
scissors.addEventListener("click", () => {
  getOption("scissors");
});
// scissors end

// start btn
startBtn.addEventListener("click", () => {
  if (choice === "") {
    alert.textContent = "Make your choice";
    alert.classList.add("alert-active");
    setTimeout(() => {
      alert.classList.remove("alert-active");
    }, 1500);
  } else {
    const result = bot();
    if (choice === "rock") {
      // switch
      switch (result) {
        case "rock":
          resultContainer.textContent = "DRAW";
          resultContainer.style.color = "yellow";
          break;
        case "paper":
          resultContainer.textContent = "YOU LOST";
          resultContainer.style.color = "red";
          break;
        case "scissors":
          resultContainer.textContent = "YOU WON";
          resultContainer.style.color = "green";
          break;
      }
      // switch end
    } else if (choice === "paper") {
      // switch
      switch (result) {
        case "rock":
          resultContainer.textContent = "YOU WON";
          resultContainer.style.color = "green";
          break;
        case "paper":
          resultContainer.textContent = "DRAW";
          resultContainer.style.color = "yellow";
          break;
        case "scissors":
          resultContainer.textContent = "YOU LOST";
          resultContainer.style.color = "red";
          break;
      }
      // switch end
    } else if (choice === "scissors") {
      // switch
      switch (result) {
        case "rock":
          resultContainer.textContent = "YOU LOST";
          resultContainer.style.color = "red";
          break;
        case "paper":
          resultContainer.textContent = "YOU WON";
          resultContainer.style.color = "green";
          break;
        case "scissors":
          resultContainer.textContent = "DRAW";
          resultContainer.style.color = "yellow";
          break;
      }
      // switch end
    }
    // if-else end

    startBtn.style.cursor = "not-allowed";
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "blue";
    startBtn.style.color = "white";
  }
  // if-else end
});
// start btn end

// reset btn
resetBtn.addEventListener("click", () => {
  choiceContainer.innerHTML = `<img src="img/question.png" alt="question" />`;
  botContainer.innerHTML = `<img src="img/question.png" alt="question" />`;
  choice = "";
  startBtn.style.cursor = "pointer";
  startBtn.disabled = false;
  startBtn.style.backgroundColor = "transparent";
  startBtn.style.color = "blue";
  resultContainer.textContent = "";
  resultContainer.style.color = "red";
});
// reset btn end

// click events end

// bot function
function bot() {
  // do-while
  do {
    rnd = Math.floor(1 + Math.random() * 50);
  } while (rnd > 3);
  // do-while end

  if (rnd === 1) {
    botContainer.innerHTML = `<img src="img/rock.png" alt="rock"/>`;
    return "rock";
  } else if (rnd === 2) {
    botContainer.innerHTML = `<img src="img/paper.png" alt="paper"/>`;
    return "paper";
  } else if (rnd === 3) {
    botContainer.innerHTML = `<img src="img/scissors.png" alt="scissors"/>`;
    return "scissors";
  }
  // if-else end
}
// bot function end
