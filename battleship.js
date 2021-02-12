/*
 * John plays a game of battleship with his friend Sonia. The game is played on a square map of N rows, numbered 1 to N. Each row contains N cells, labeled with consecutive English upper-case letter (A, B, C, etc.). Each cell is identified by a string composed of its row number followed by its column number. For example, 9C denotes the third cell in row 9. 
 *
 *
 * Examples:
 * 1. Given N = 4, S= "1B 2C,2D 4D" and T = "2B 2D 3D 4D 4A", your function should return "1,1"
 *
 * 2. Given N = 3, S = "1A 1B,2C 2C" and T = "1B", your function should return "0,1". One ship was hit but not sunk. Note that the ship in cell 2C was not hit nor sunk, therefore it is not included in the result
 *
 * 3. Given N = 12, S = "1A 2A,12A 12A" and T = "12A", your function should return "1,0". One ship was sunk
 *
 *
 */


/*
  let S = "1B 2C,2D 4D";
  let T = "2B 2D 3D 4D 4A";
 * xs is one ship, os are another ship
 *    A  B  C  D
 * 1     x  x
 * 2     x  x  o
 * 3           o
 * 4           o
 *
 * S has top left corner and bottom right corner of each ship
 */



function battleship(N, S, T) {
  /* Assumptions to make:
   * N is an integer within  the range [1..26]
   * String S contains the descriptions of rectangular ships of area not greater than 4 cells
   * There can be at most one ship located on any map cell (ships do not overlap)
   *
   * Ships and shots do not go off the map. Codility says to assume all input is valid
   */

  //map is has no tiles
  if (N === 0) {
    console.log("Map has no tiles.");
    return "0,0";
  }
  
  //there are no ships
  if (S.length === 0) {
    console.log("No ships in play.");
    return "0,0"
  }

  //there are no shots fired
  if (T.length === 0) {
    console.log("No shots fired.");
    return "0,0";
  }
  
  let shipCoords = {}; //coord: shipID
  let shipHits = {}; //shipID: [current hits until sunk, initial hits until sunk]

  let numSunk = 0; //ships sunk to be returned
  let numHits = 0; //number of hits that didn't contribute to sinking to be returned

  parseShips(shipCoords, shipHits, S); //gets coordinates of ships and populates shipCoords with coord: shipID
  
  let shots = T.split(" ");

  shots.forEach(shot => {
    if (shipCoords[shot] >= 0) {
      numHits++;

      //if ship's hits until sunk > 0, decrement current shots hit until sunk
      if (shipHits[shipCoords[shot]][0] > 0) {
        shipHits[shipCoords[shot]][0]--;
      }

      //if ship's hits until sunk > 0, increment numSunk and decrease numHits by ship's initial shot tolerance
      if (shipHits[shipCoords[shot]][0] === 0) {
        numSunk++;
        numHits = numHits - shipHits[shipCoords[shot]][1];
      }
    }
  });
  
  return `${numSunk},${numHits}`;
}

//maps each ship to its coordinates and also to its size
function parseShips(shipCoords, shipHits, positions) {
  let ships = positions.split(",");
  let ship;

  for (let i = 0; i < ships.length; i++) {
    ship = ships[i].split(" ");
    
    //get all coordinates of a ship
    let cells = getShipCoords(ship, shipCoords);
    shipHits[i] = [cells.length, cells.length];

    
    //add all ship coordinates to hash
    markShip(cells, i, shipCoords);
  }
}

//find all coordinates of a ship
function getShipCoords(shipTuple, shipCoords) {
  let cells = shipTuple;

  let row1 = shipTuple[0].slice(0, shipTuple[0].length - 1);
  let column1 = shipTuple[0].slice(shipTuple[0].length - 1, shipTuple[0].length);

  let row2 = shipTuple[1].slice(0, shipTuple[1].length - 1);
  let column2 = shipTuple[1].slice(shipTuple[1].length - 1, shipTuple[0].length);

  //get ASCIIs
  let col1Code = column1.charCodeAt(0);
  let col2Code = column2.charCodeAt(0);
  let row1Code = row1.charCodeAt(0);
  let row2Code = row2.charCodeAt(0);

  //to find how many additional cells we need to map
  let rowDifference = row2 - row1;
  let colDifference = col2Code - col1Code;

  //to determine if we need to add 1 or two rows/columns if ship is 1 long rectangle
  let additionalRows = (row2Code - row1Code) - 1;
  let additionalCols = (col2Code - col1Code) - 1;

  //ships are in the same row
  if (rowDifference === 0) {
    for (i = 1; i <= additionalCols; i++) {
      cells.push(row1 + String.fromCharCode(col1Code + i));
    }
  }

  //ships are in the same column
  else if (colDifference === 0) {
    for (i = 1; i <= additionalRows; i++) {
      cells.push(String.fromCharCode(row1Code + i) + column1);
    }
  }

  //ships are only 4 cells, so it is a square
  else {
    cells.push(row1 + column2);
    cells.push(row2 + column1);
  }

  return cells;
}

function markShip(map, shipID, coords) {
  map.forEach(cell => {
    coords[cell] = shipID;
  });
}


let A = 4;
let B = "1B 2C,2D 4D";
let C = "2B 2D 3D 4D 4A";
//1,1


let A2 = 3;
let B2 = "1A 2B,2C 2C";
let C2 = "1B";
//0,1


let A3 = 12;
let B3 = "1A 2A,12A 12A";
let C3 = "12A";
//0,1


let A4 = 3;
let B4 = "";
let C4 = "";
//0,0


let A5 = 4;
let B5 = "1B 2C,2D 4D";
let C5 = "";
//0,0


let A6 = 0;
let B6 = "1B 2C,2D 4D";
let C6 = "2B 2D 3D 4D 4A";
//0,0


let A7 = 5;
let B7 = "1A 4A,1D 4D,1B 2C,5B 5E";
let C7 = "1B 2B 2C 1C 1A 2A 3A 4A 1D 4D 2D 5B 3D 5C 5D 5E";
//4,0


let A8 = 5;
let B8 = "1A 4A,1D 4D,1B 2C,5B 5E";
let C8 = "1B 2B 2C 1A 2A 3A 1D 2D 5B 3D 5D 5E";
//0,12

let A9 = 5;
let B9 = "1A 4A,1D 4D,1B 2C,5B 5E";
let C9 = "1B 2B 2C 1C 1A 2A 3A 4A 1D 4D 2D 5B 3D 5C 5D";
//3,3

let A10 = 6;
let B10 = "1A 4A,1D 4D,1B 2C,5B 5E";
let C10 = "5A 6A 3B 3C 4B 4C 6B 6C 6D 6E";
//0,0

console.log(battleship(A, B, C));
console.log(battleship(A2, B2, C2));
console.log(battleship(A3, B3, C3));
console.log(battleship(A4, B4, C4));
console.log(battleship(A5, B5, C5));
console.log(battleship(A6, B6, C6));
console.log(battleship(A7, B7, C7));
console.log(battleship(A8, B8, C8));
console.log(battleship(A9, B9, C9));
console.log(battleship(A10, B10, C10));
