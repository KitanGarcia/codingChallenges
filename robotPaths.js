/*
 * Given a matrix of 0s, determine how many unique paths exist form the top left corner to the bottom right corner
 *
 * input: an array of an array of integers (matrix)
 * output: integer
 *
 *Example 1:
 Input:  
 [[ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0]]

 Output: 38


Example 2:

 Input:  
 [[ 0, 0, 0],
  [ 0, 0, 0]]

 Output: 4


Example 3:
 Input:  
 [[ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0]]

 Output: 7110272



 From any point, you can travel in the four cardinal directions (north, south, east, west)
 A path is valid as long as it travels from the top left corner to the bottom right corner,
 does not go off of the matrix, and does not travel back on itself. Think of this as a graph
 traversal problem where you note the nodes you've visited in some way
 */

function robotPaths() {
}
