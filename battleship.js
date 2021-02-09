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


let S = "1B 2C,2D 4D";
let T = "2B 2D 3D 4D 4A";

//create matrix of appropriate length
//
//get ascii codes to map letters to array indices. code1 - code(a) + 1. We add 1 since we are envisioning this as a 1 based array (as opposed to 0)
//
//mark ships
//
//go through T and parse cells. Increment hit. When a ship is sunk, set hit to 0 and add 1 to sunk
