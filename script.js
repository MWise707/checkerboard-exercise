"use strict";

// create container for tiles
const bodyEl = document.querySelector("body");
const containerEl = document.createElement("container");
bodyEl.appendChild(containerEl);
containerEl.style.display = "flex";
containerEl.style.flexWrap = "wrap";
containerEl.style.width = "800px";
containerEl.style.height = "800px";
containerEl.style.color = "blue";

// Tile Functions
function createRedTile() {
  let redTile = document.createElement("div");
  redTile.style.width = "12.5%";
  redTile.style.height = "12.5%";
  redTile.style.backgroundColor = "red";
  return redTile;
}

function createBlackTile() {
  let blackTile = document.createElement("div");
  blackTile.style.width = "12.5%";
  blackTile.style.height = "12.5%";
  blackTile.style.backgroundColor = "black";
  return blackTile;
}

function createOddRow() {
  for (var i = 1; i < 9; i++) {
    if (i % 2 !== 0) {
      let redTile = createRedTile();
      containerEl.appendChild(redTile);
    } else {
      let blackTile = createBlackTile();
      containerEl.appendChild(blackTile);
    }
  }
}

function createEvenRow() {
  for (var i = 1; i < 9; i++) {
    if (i % 2 !== 0) {
      let blackTile = createBlackTile();
      containerEl.appendChild(blackTile);
    } else {
      let redTile = createRedTile();
      containerEl.appendChild(redTile);
    }
  }
}

const createBasicCheckerBoard = function () {
  for (let i = 1; i < 9; i++) {
    if (i % 2 !== 0) {
      createOddRow();
    } else {
      createEvenRow();
    }
  }
};

// createBasicCheckerBoard();

// ### Random Colors

// On a new branch called `randomcolors`, implement the following changes:

// 1. Instead of being either red or black, each tile should be a random color.  How do you generate random colors?  You can use RGB or Hexadecimal as your color system.

// create random color function- using hex code color
const getRandomColor = function () {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Random Colored Tile function - uses hex code
function createRandTile() {
  let randomTile = document.createElement("div");
  randomTile.style.width = "12.5%";
  randomTile.style.height = "12.5%";
  randomTile.style.backgroundColor = `${getRandomColor()}`;
  return randomTile;
}

const createRandoCheckerboard = function () {
  for (let i = 1; i < 65; i++) {
    let randoTile = createRandTile();
    containerEl.appendChild(randoTile)
  }
};
// createRandoCheckerboard();

