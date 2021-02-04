// elems
const board = document.getElementById("board");
const cellElems = document.querySelectorAll("[data-cell]");
const messageElem = document.getElementById("message");
const messageText = document.querySelector("[message-text]");
const restartBtn = document.getElementById("restart");
// elems end

// variables
let circleTurn = false;
const winingCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// variables end

// main
startGame();

restartBtn.addEventListener("click", startGame);
// main end

// // functions

// start game
function startGame() {
  board.classList.add("x");

  // foreach
  cellElems.forEach((cell) => {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  // foreach end

  messageElem.classList.remove("message-show");
}
// start game end

// handle click
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? "circle" : "x";

  cell.classList.add(currentClass);

  // if-else
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
  // if-else end
}
// handle click end

// swap turns
function swapTurns() {
  circleTurn = !circleTurn;

  board.classList.remove("x");
  board.classList.remove("circle");

  // if-else
  if (circleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
  // if-else end
}
// swap turns end

// check win
function checkWin(currentClass) {
  return winingCombinations.some((odds) => {
    // some
    return odds.every((index) => {
      // every
      return cellElems[index].classList.contains(currentClass);
    }); // every end
  }); // some end
}
// check win end

// is draw
function isDraw() {
  return [...cellElems].every((cell) => {
    // every
    return cell.classList.contains("x") || cell.classList.contains("circle");
  }); // every end
}
// is draw end

// end game
function endGame(draw) {
  // if-else
  if (draw) {
    messageText.innerHTML = "DRAW";
  } else {
    messageText.innerHTML = `${circleTurn ? "O's" : "X's"} Wins`;
  }
  // if-else end

  messageElem.classList.add("message-show");
}
// end game end

// // functions end
