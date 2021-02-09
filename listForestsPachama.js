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
 *  [[1, 4], [2, 4], [2, 4], [3, 3], [1, 5], [2, 5], [1, 6], [2, 6]]
 */
