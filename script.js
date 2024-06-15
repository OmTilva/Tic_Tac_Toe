let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO = false; //playerX,playerO
let count = 0;
const winPatterns = [
  //boxes starting from 0 to 8(total 9=>{3*3})
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 3, 6],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});

const showWinner = (winner) => {
  if (count == 9) {
    msg.innerHTML = "Match Draw!";
    msgcontainer.classList.remove("hide");
    disableBtn();
  } else {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBtn();
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      } else if (count == 9) {
        showWinner();
      }
    }
  }
};
const resetGame = () => {
  turnO = false;
  enableBtn();
  msgcontainer.classList.add("hide");
};
const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
