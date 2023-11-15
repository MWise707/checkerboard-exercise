"use strict";

// create container for tiles
const bodyEl = document.querySelector("body");
const containerEl = document.createElement("container");
bodyEl.appendChild(containerEl);
// apply style for container
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

// let blackTileEl = createBlackTile();
// containerEl.appendChild(blackTileEl);




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

for (let i = 1; i < 9; i++) {
  if (i % 2 !== 0) {
    createOddRow();
  } else {
    createEvenRow();
  }
}
