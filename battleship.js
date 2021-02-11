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
 * Assumptions to make:
 * N is an integer within  the range [1..26]
 * String S contains the descriptions of rectangular ships of area not greater than 4 cells
 * There can be at most one ship located on any map cell (ships do not overlap)
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
  //do preliminary checks
  //ship goes beyond map
  //shot goes beyond map
  //all shots are hits
  //all ships sunk
  //all shots miss
  //no ships
  //no shots
  
  let shipCoords = {};
  parseShips(shipCoords, S);
}

//positions is the preliminary string given
function parseShips(shipCoords, positions) {
  let ships = positions.split(",");
  let ship;

  for (let i = 0; i < ships.length; i++) {
    ship = ships[i].split(" ");
    
    //ship is top left and bottom right corner of each ship
    //shipID is i,
    markShips(ship, i, shipCoords);
  }
}

//find all coordinates of a ship and mark on shipCoords hash
function markShips(shipTuple, shipID, shipCoords) {
  let cells = shipTuple;

  let row1 = shipTuple[0].slice(0, shipTuple[0].length - 1);
  let column1 = shipTuple[0].slice(shipTuple[0].length - 1, shipTuple[0].length);
  console.log(row1);
  console.log(column1);


  let row2 = shipTuple[1].slice(0, shipTuple[1].length - 1);
  let column2 = shipTuple[1].slice(shipTuple[1].length - 1, shipTuple[0].length);
  console.log(row2);
  console.log(column2);


  //get ASCIIs
  let col1Code = column1.charCodeAt(0);
  let col2Code = column2.charCodeAt(0);
  let row1Code = row1.charCodeAt(0);
  let row2Code = row2.charCodeAt(0);
  console.log(col1Code);
  console.log(col2Code);

  //to find how many additional cells we need to map
  let rowDifference = row2 - row1;
  let colDifference = column2 - column1;

  //DOUBLE CHECK THESE
  let additionalRows = row2Code - row1Code;
  let additionalCols = col2Code - col1Code;
  console.log(additionalRows);
  console.log(additionalCols);

  //ships are in the same row
  if (rowDifference === 0) {
    for (i < 0; i < additionalCols; i++) {
      cells.push(row1 + String.fromCharCode(col1Code + i));
    }
  }

  //ships are in the same ocl
  else if (colDifference === 0) {
    for (i < 0; i < additionalRows; i++) {
      cells.push(String.fromCharCode(row1Code + i) + col1);
      console.log(col1);
      console.log(row1Code + i);
    }
  }

  else {
    cells.push(row1 + column2);
    cells.push(row2 + column1);
  }
  console.log(cells);

  //add cells array to shipCoords

  return cells;
}


let S = "1B 2C,2D 4D";
let T = "2B 2D 3D 4D 4A";

console.log(battleship(S, T));
