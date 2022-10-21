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
  initScoreBoard();
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
}

function initChestEventListeners() {
  chestOne.addEventListener("click", chestClicked);
  chestTwo.addEventListener("click", chestClicked);
  chestThree.addEventListener("click", chestClicked);
}

function chestClicked(e) {
  if (randomChest == e.target.id) {
    getImageFromPexels(e);
    // e.target.src = "images/crystal-scull.png";
    scoreUpdate(scored += 5);
  } else {
    e.target.src = "images/chest-open.png";
  }
  removeChestEvents();
}

function getImageFromPexels(e) {
  let url = 'https://api.pexels.com/v1/search?query=halloween+query&per_page1&page=1%22';
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Authorization', '563492ad6f91700001000001a3da77e259d5476ba28118757c5cf8d6');
  request.send();
  request.addEventListener('load', function(){
    let imgPexels = JSON.parse(this.response);
    e.target.src = imgPexels.photos[4].src.small;
  })

}
function removeChestEvents() {
  chestOne.removeEventListener("click", chestClicked);
  chestTwo.removeEventListener("click", chestClicked);
  chestThree.removeEventListener("click", chestClicked);
}

document.addEventListener("DOMContentLoaded", init);
