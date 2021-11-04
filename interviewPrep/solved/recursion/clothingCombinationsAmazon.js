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
 *
 *
 *
#include <iostream>
using namespace std;
/*
    
      0      1
    00 01  10  11
    
        ""
        / \
      ""    "a" 
     / \    / \ 
  ""   "b" "a" "ab"
 * Customer wants to buy jeans, top, shoes, skirt, with a given budget
 *
 * Input: 4 arrays and an integer
 
         jean2    jean3
          |          | 
        shoes4      shoes4
      /    \ 
 
          -------->
 *   | Jeans: [2, 3]
 *   | Shoes: [4]
 *   | Skirts: [2, 3]
 *   V Tops: [1, 2]
      [[2,3], [4], [2,3], [1,2]]
 *   XXXXX --- Budget: 10
 *
 *
 * Output: 4
 *   number of ways to purchase each category that come out recurse 
to less than or equal to the budget
 *   1: 2 + 4 + 2 + 1 = 9
 *   2: 2 + 4 + 2 + 2 = 10
 *   3: 3 + 4 + 2 + 1 = 10
 *   4: 2 + 4 + 3 + 1 = 10
 
 Base Case 1: Depth > 3 (greater than array size)
 Base Case 2: Over Budget
 Base Case 3: No More Items In Bucket
                                        10
                8                                                7                       1
                 
    coinSum(coins, target):
      inner(curCoin, remaining):
        if remaining < 0:
          return 0 
        if remaining == 0 
          return 1
        if curCoin >= coins.length:
          return 0
        return inner(curCoin, reamingin - coins[curCoin]) + inner(curCoin+1, remaining)
  return inner(0, target)
 
 
 
 function getClothes(jeans, shoes, skirts, tops, target):
  clothing = [jeans, shoes, shirts, tops]
  let memo = {};

  helper(clothingIndex, subArrayIndex, remaining) {
    //base case
    if (remaining < 0) {
      return 0;
    }
    if (clothingIndex > 3 && remaining >= 0) {
      return 1;
    }
    if (subArrayIndex >= clothing[clothingIndex].length) {
      return 0;
    }
    const key = $"{clothingIndex}_{subArrayIndex}_{remaining}"
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }
    

    //recurse
    pickedThing - reduce reamining, look at next clothing type, reset subArraindex  + didntPickThing - increment subArraIndex
    let val =  helper(clothingIndex + 1, 0, remaining - clothing[clothingIndex][subArrayIndex])
    +
    helper(clothingIndex, subArrayIndex + 1, remaining)
    memo[key] = val;
    return val
  }
  
FOR LOOP VERSION
    let sum = 0;
    for(int i = 0; i < clothing[clothingIndex].length; i++){
      let currentPiece = clothing[clothingIndex][i]
      sum += helper(clothingIndex + 1, remanining - currentPiece)
    }
    return sum; 
 
 */

/*
 *                         2                                                           3
 *                         4                                                           4
 *          2
 *
 * Take the clothing and move on or move to the next of the same type
 */
function findCombinations(jeans, shoes, skirts, tops, budget) {
  let array = [];
  array.push(jeans);
  array.push(shoes);
  array.push(skirts);
  array.push(tops);
  let count = 0;

  function findCombos(clothingType, clothingIndex, remaining) {
    //if we have selected from each clothing category and have 0 or more money left
    if (remaining >= 0 && clothingType > array.length - 1) {
      count++;
      console.log("SOLUTION. Remaining: " + remaining);
      console.log("Count: " + count);
      return;
    }
    if (remaining < 0) {
      return;
    }
    if (clothingType >= array.length) {
      return;
    }
    if (clothingIndex >= array[clothingType].length) {
      return;
    }

    console.log("====================================================");
    /*
    console.log("Clothing type: " + clothingType);
    console.log("Clothing index: " + clothingIndex);
    */
    console.log("Value: " + array[clothingType][clothingIndex]);
    console.log("Remaining: " + remaining);

    //pick the the clothes and move to the next category, or move onto the next one of the same category

    //pick clothes and move on to next category
    findCombos(clothingType + 1, 0, remaining - array[clothingType][clothingIndex]);

    //look at clothes of same category
    findCombos(clothingType, clothingIndex + 1, remaining);
  }

  findCombos(0, 0, budget);
  return count;
}




function findCombinationsMemo(jeans, shoes, skirts, tops, budget) {
  let array = [];
  array.push(jeans);
  array.push(shoes);
  array.push(skirts);
  array.push(tops);
  let memo = {};

  function findCombos(clothingType, clothingIndex, remaining) {
    //if we have selected from each clothing category and have 0 or more money left
    if (remaining >= 0 && clothingType > array.length - 1) {
      console.log("SOLUTION. Remaining: " + remaining);
      return 1;
    }
    if (remaining < 0) {
      return 0;
    }
    if (clothingType >= array.length) {
      return 0;
    }
    if (clothingIndex >= array[clothingType].length) {
      return 0;
    }

    const key = `${clothingType}_${clothingIndex}_${remaining}`;
    if (memo.hasOwnProperty(key)) {
      console.log("Hit Memo at: " + key);
      console.log(memo[key]);
      return memo[key];
    }

    console.log("====================================================");
    console.log("Value: " + array[clothingType][clothingIndex]);
    console.log("Remaining: " + remaining);
    console.log("Clothing type: " + clothingType);
    console.log("Clothing index: " + clothingIndex);

    //pick the the clothes and move to the next category, or move onto the next one of the same category

    let val = findCombos(clothingType + 1, 0, remaining - array[clothingType][clothingIndex]) + 
              findCombos(clothingType, clothingIndex + 1, remaining);
    memo[key] = val;
    return val;
  }

  return findCombos(0, 0, budget);
}


let jeans = [2, 3];
let shoes = [4];
let skirts = [2, 3];
let tops = [1, 2];
let budget = 10;

//console.log(findCombinations(jeans, shoes, skirts, tops, budget));
console.log(findCombinationsMemo(jeans, shoes, skirts, tops, budget));
