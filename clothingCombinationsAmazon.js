/*
 * Customer wants to buy jeans, top, shoes, skirt, with a given budget
 *
 * Input: 4 arrays and an integer
 *   Jeans: [2, 3]
 *   Shoes: [4]
 *   Skirts: [2, 3]
 *   Tops: [1, 2]
 *   Budget: 10
 *
 *
 * Output: 4
 *   number of ways to purchase each category that come out to less than or equal to the budget
 *   1: 2 + 4 + 2 + 1 = 9
 *   2: 2 + 4 + 2 + 2 = 10
 *   3: 3 + 4 + 2 + 1 = 10
 *   4: 2 + 4 + 3 + 1 = 10
 */

/*
 * Turn it into a graph
 *                  /--1
 * 2--\        /---3---2
 *     ---- 4--
 *    /        \---2---1
 * 3--             \---2
 */

function findCombinations(jeans, shoes, skirts, tops, budget) {
}

let jeans = [2, 3];
let shoes = [4];
let skirts = [2, 3];
let tops = [1, 2];
let budget = 10;
console.log(findCombination(jeans, shoes, skirts, tops, budget));
