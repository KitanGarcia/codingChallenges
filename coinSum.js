// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom
/*
 * Complete the 'coinSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY coins
 *  2. INTEGER total
 * 
 * input: 5, [1, 2, 4]
 *                                             5
 *                     1                       3                          4
 *                     1                     1  2                     3      2
 *                                              1                   1  2     1
 *                                                                     1
 * 
 *                 first check if in cache 
 *  base case: 1. if hits total, return 1
 *             2. if goes over the total return 0 
 * 
 *  recursive cases: sum - coins[0]
 *                   sum  - coins[1]
 *                  sum  - coins[2]
 * 
 * 
 * 
 *   bottom up
 *   base case: 1. hits the total return 1
 *              2. goes over the total return 0
 *
 *   recursive cases:
 *                   if sum < total
 *                   
 * 
 */

function coinSum(coins, total) {
    // Write your code here
    
    //do we need a base case for 1
    
    function addCoin(difference) {
      //first check if in cache
      if (difference == 0) {
        return 1;
      }
      if (difference < 0) {
        return 0;
      }
      addCoin(total - )
    }
}

//order doesn't matter. Watch out for equivalent answer 5 + 3 + 2 is the same as 2 + 5 + 3
//table = [];
//prefilled table to length of target + 1
//filled with 0s, but have table[0] = 1
//for each target, store the number of unique unordered combos
//
//iterate through coins
//  loop i, from coin to target 
//  table[i] = table[i] + table[i - coin]
//
//
//
//
//
//
//
//
//
//  function coinSum(coins, total) {
//    let table = new Array(total + 1);
//    table.fill(0);
//    table[0] = 1;
//
//    coins.forEach(coin => {
//      for (let i = coin; i < table.length; i++) {
//        table[i] = table[i] + table[i - coin];
//      }
//    });
//
//    return table[return.length - 1]
//  }
//https://repl.it/@DaliaOutco/CoinSum
