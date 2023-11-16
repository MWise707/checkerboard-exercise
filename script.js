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
function createDynamicTile(color) {
  let dynamicTile = document.createElement("div");
  dynamicTile.style.width = "12.5%";
  dynamicTile.style.height = "12.5%";
  dynamicTile.style.backgroundColor = color;
  return dynamicTile;
}

const createRedTile = function () {
  createDynamicTile("red");
};
const createBlackTile = function () {
  createDynamicTile("black");
};
const addElToCont = function (element) {
  containerEl.appendChild(element);
};


function createOddRow() {
  for (var i = 1; i < 9; i++) {
    if (i % 2 !== 0) {
      let redTile = createDynamicTile("red");
      addElToCont(redTile);
    } else {
      let blackTile = createDynamicTile("black");
      addElToCont(blackTile);
    }
  }
}

function createEvenRow() {
  for (var i = 1; i < 9; i++) {
    if (i % 2 !== 0) {
      let blackTile = createDynamicTile("black");
      addElToCont(blackTile);
    } else {
      let redTile = createDynamicTile("red");
      addElToCont(redTile);
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
    containerEl.appendChild(randoTile);
  }
};
// createRandoCheckerboard();

// On a new branch called `gradient`, write code to color the tiles using some sort of gradient.  It does not need to look exactly like the image below, but it should have some sort of increasing/decreasing color values.

const colorGradients = {
  yellowOrange: ["#FFFFCC", "#FFFF99", "#FFFF66", "#FFFF33", "#FFFF00", "#FFCC66", "#FFCC99", "#FFCC33", "#FFCC00",  "#FF9966", "#FF9933", "#FF9900"],
  redGradient: ["#FF6666", "#FF6633", "#FF6600", "#CC6666", "#CC3333", "#CC3300", "#FF3333", "#FF3300", "#FF0033", "#FF0000", "#CC0033", "#CC0000", "#993333", "#993300", "#990033", "#990000", "#990066", "#993366"],
  redPinkPurple: ["#CC3366", "#CC0066", "#FF3366", "#FF0066", "#FF3399", "#FF0099", "#FFCCCC", "#CC9999", "#FF9999", "#FF6699", "#FF99CC", "#FF66CC", "#FFCCFF", "#FF99FF", "#FF66FF", "#FF33FF", "#FF00FF", "#FF33CC",  "#CC99CC", "#CC66CC", "#CC6699", "#CC3399", "#CC0099", "#FF00CC", "#CC99FF", "#CC66FF", "#CC33FF", "#CC00FF", "#CC00CC", "#CC33CC", "#9966CC", "#996699", "#9933CC", "#9900CC", "#993399", "#990099", "#9999FF", "#9966FF", "#9933FF", "#9900FF ", "#660099", "#663399"], 
}

console.log("redPinkPurple " + colorGradients.redPinkPurple.length);
console.log("yellowOrange " + colorGradients.yellowOrange.length);
console.log("redGradient " + colorGradients.redGradient.length);

function createYellowOrangeRow () {
  for (let i = 0; i < 12; i++) {
    let tileColor = colorGradients.yellowOrange[i];
    let gradientTile = createDynamicTile(tileColor);
    addElToCont(gradientTile);
  }
}
function createRedGradRow () {
  for (let i = 0; i < 18; i++) {
    let tileColor = colorGradients.redGradient[i];
    let gradientTile = createDynamicTile(tileColor);
    addElToCont(gradientTile);
  }
}
function createRedPinkPurple () {
  for (let i = 0; i < 34; i++) {
    let tileColor = colorGradients.redPinkPurple[i];
    let gradientTile = createDynamicTile(tileColor);
    addElToCont(gradientTile);
  }
}

function createGradientBoard() {
  createYellowOrangeRow();
  createRedGradRow();
  createRedPinkPurple();
}

// createGradientBoard();


git 