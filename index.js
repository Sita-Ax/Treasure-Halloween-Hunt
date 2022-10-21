let scored = 0;
let randomChest = 0;
let chestOne = document.createElement("img");
let chestTwo = document.createElement("img");
let chestThree = document.createElement("img");
function init() {
  initGameUI();
}

function initGameUI() {
  initChests();
  //checking bord
  initScoreBoard();
  //ref to get new chest
  initRefreshButton();
  //opens chest
  initChestEventListeners();
}

function initChests() {
  let chestDiv = document.getElementById("chests");

  chestDiv.appendChild(chestOne);
  chestOne.setAttribute("src", "images/chest-closed.png");
  chestOne.setAttribute("style", "margin: 10px;");
  chestOne.setAttribute("id", "1");

  chestDiv.appendChild(chestTwo);
  chestTwo.setAttribute("src", "images/chest-closed.png");
  chestTwo.setAttribute("style", "margin: 10px;");
  chestTwo.setAttribute("id", "2");

  chestDiv.appendChild(chestThree);
  chestThree.setAttribute("src", "images/chest-closed.png");
  chestThree.setAttribute("style", "margin: 10px;");
  chestThree.setAttribute("id", "3");

  initRefreshButton();
  initChestEventListeners();
}

function initScoreBoard() {
  let wrapper = document.getElementById("game-wrapper");
  let score = document.createElement("h3");
  wrapper.appendChild(score);
  score.setAttribute("style", "font-family: sans-serif; color: yellow; margin: auto; padding: 20px;");
  score.id = "score-board";
  score.innerHTML = "score: " + scored;
  console.log(score + "initScoreBoard");
}
function scoreUpdate() {
  let scoreBoard = document.getElementById("score-board");
  scoreBoard.textContent = "Score: " + scored;
}

function initRefreshButton() {
  randomChest = Math.floor(Math.random() * 3) + 1;
  let refreshButton = document.getElementById("refresh-button");
  refreshButton.addEventListener("click", initChests);
  console.log(" initRefreshButton " + randomChest);
}

function initChestEventListeners() {
  chestOne.addEventListener("click", chestClicked);
  chestTwo.addEventListener("click", chestClicked);
  chestThree.addEventListener("click", chestClicked);
}

function chestClicked(e) {
  if (randomChest == e.target.id) {
    e.target.src = "images/crystal-scull.png";
    scoreUpdate(scored += 5);
  } else {
    e.target.src = "images/chest-open.png";
  }
  removeChestEvents();
}

function getImageFromPexels() {
  // make a request towards pexels API and get 1 Diamond image
}

// function refresh() {
//   let refreshChest = document.getElementById("refresh-button");
//   refreshChest.init();
//   console.log(refreshChest + "ref");
// }
function removeChestEvents() {
  console.log("rem");
}

document.addEventListener("DOMContentLoaded", init);
