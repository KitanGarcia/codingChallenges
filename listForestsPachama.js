/*
 * Given a 2D matrix of 1s and 0s (1s representing trees and 0s nothing), print out the coordinates of all the 1s in the order of the forest they appear in.
 * A forest is a group of adjacent 1s (no 0s in between) not counting diagonals
 *
 * Input:
 * [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 *  [ 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
 *  [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
 *  [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
 *
 *  Output:
 *  [[1, 3], [2, 3], [2, 2], [3, 2], [1, 5], [2, 5], [1, 6], [2, 6]]
 */


function listForests(array) {
  let map = array;
  let result = [];
  let visited = new Set();

  //iterate across whole map
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {

      //if the value is a 1 that has not been visited, perform bfs
      if (map[i][j] == 1 && !visited.has(i + "_" + j)) {
        //result.push([i, j]);
        result = result.concat(bfs(map, visited, i, j));
      }
    }
  }
  return result;
}

function bfs(map, visited, i, j) {
  let result = [];
  let queue = [];
  queue.push([i, j]);

  while (queue.length > 0) {
    let current = queue.shift(); //should it be named tuple?
    result.push(current);

    let neighbors = getNeighbors(map, current[0], current[1]);
    console.log("Queue: " + queue);
    console.log("Visited: ");
    console.log(visited);
    console.log("Current: " + current);
    console.log("Neighbors: " + neighbors);

    for (let tuple of neighbors) {
      if (!visited.has(tuple[0] + "_" + tuple[1])) {
        queue.push(tuple);
        visited.add(tuple[0] + "_" + tuple[1]);
      }
    }
  }
  return result;
}

function getNeighbors(map, i, j) {
  let neighbors = [];
  let tuple = [];

  //check i and j for bounds of map
  console.log(map.length);
  console.log(map[0].length);

  //shouldn't this be  i <= map.length?????????????
  if (i <= map.length) {
    if (map[i + 1][j] == 1) {
      neighbors.push([i + 1, j]);
    }
  }
  
  if (j > 0) {
    if (map[i][j - 1] == 1) {
      neighbors.push([i, j - 1]);
    }
  }

  if (j <= map[0].length) {
    if (map[i][j + 1] == 1) {
      neighbors.push([i, j + 1]);
    }
  }
  return neighbors;
}


let input =  [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [ 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
              [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
              [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//

let input2 =  [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [ 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
              [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
              [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

console.log(listForests(input2));
