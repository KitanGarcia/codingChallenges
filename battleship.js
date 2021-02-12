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



function battleship(S, T) {
  /* Assumptions to make:
   * N is an integer within  the range [1..26]
   * String S contains the descriptions of rectangular ships of area not greater than 4 cells
   * There can be at most one ship located on any map cell (ships do not overlap)
   *
   */

  //do preliminary checks
  //ship goes beyond map
  //shot goes beyond map
  //all shots are hits
  //all ships sunk
  //all shots miss
  
  //there are no ships
  if (S.length === 0) {
    console.log("No ships in play.");
    return "0,0"
  }
  
  let shipCoords = {}; //coord: shipID
  let shipHits = {}; //shipID: [current hits until sunk, initial hits until sunk]

  let numSunk = 0; //ships sunk to be returned
  let numHits = 0; //number of hits that didn't contribute to sinking to be returned

  parseShips(shipCoords, shipHits, S); //gets coordinates of ships and populates shipCoords with coord: shipID
  
  let shots = T.split(" ");
  console.log(shipCoords);
  console.log(shipHits);
  console.log(shots);


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

//ROW MUST BE LESS THAN N AND COL MUST BE LESS THAN N IN ALPHABET FORM!!!!!!!!


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
    for (i = 1; i < additionalCols; i++) {
      cells.push(row1 + String.fromCharCode(col1Code + i));
    }
  }

  //ships are in the same column
  else if (colDifference === 0) {
    for (i = 1; i <= additionalRows; i++) {
      cells.push(String.fromCharCode(row1Code + i) + column1);
    }
  }

  //ships are only 4 cells, it is a square
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


let S = "1B 2C,2D 4D";
let T = "2B 2D 3D 4D 4A";

let A1 = "";
let B1 = "";

let A2 = "1B 2C,2D 4D";
let B2 = "";
console.log(battleship(S, T));
