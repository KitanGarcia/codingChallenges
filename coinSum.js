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
  let count = 0;
  function sumCoins(sum, coin) {
    if (sum === total) {
      return 1;
    }
    else if (sum > total) {
      return 0;
    }
    return sumCoins(sum + coin, coins[0]) + sumCoins(sum + coin, coins[1]) + sumCoins(sum + coin, coins[2]);
  }
  
  return sumCoins(0, 0);
}
//need to get rid of duplicates




//BEST IMPLEMENTATION
function coinSum2(coins, total) {
  let table = new Array(total + 1);
  table.fill(0);
  table[0] = 1;

  coins.forEach(coin => {
    for (let i = coin; i < table.length; i++) {
      table[i] = table[i] + table[i - coin];
    }
    console.log(table);
  });
  return table[table.length - 1];
}



console.log(coinSum([1, 2, 3], 4)); //should output 4
console.log(coinSum([1, 2, 4], 5)); //should also output 4
console.log(coinSum([1, 3, 5, 7], 8)); //should output 6

console.log(coinSum2([1, 2, 3], 4)); //should output 4
console.log(coinSum2([1, 2, 5], 5)); //should output 4
console.log(coinSum2([1, 2, 4], 5)); //should also output 4
console.log(coinSum2([1, 3, 5, 7], 8)); //should output 6

//order doesn't matter. Watch out for equivalent answer 5 + 3 + 2 is the same as 2 + 5 + 3
//table = [];
//prefilled table to length of target + 1
//filled with 0s, but have table[0] = 1
//for each target, store the number of unique unordered combos

/*
 * Example
 *
 * Amount: 5
 * Coins: [1, 2, 5]
 *
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []
 o [1]
 i [1, 2]
 n [1, 2, 5]  
 *
 *
 * Table[amount][coin] will equal # of ways to reach amount with the given coins
 * Every row is the addition of a new coin
 *
 * Each of these entries is a subproblem. We will answer 6 * 4 questions to reach our final answer (the total)
 *
 * Filling in the table:
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []          1                              (0)
 o [1]         1                              (1)
 i [1, 2]      1                              (2)
 n [1, 2, 5]   1                              (5)
 *
 * There will be 1 way to make change of 0 for each set of coins: not using any coins at all
 *
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []          1   0   0   0   0   0          (0)
 o [1]         1                              (1)
 i [1, 2]      1                              (2)
 n [1, 2, 5]   1                              (5)
 * 
 * There are no ways to make any amount other than 0 with 0 coins
 *
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []          1   0   0   0   0   0          (0)
 o [1]         1   1   1   1   1   1          (1)
 i [1, 2]      1                              (2)
 n [1, 2, 5]   1                              (5)
 *
 * For each row, find out how many ways it is possible, using JUST that coin. Add that to previous row (all 0s in this case) and we get our total ways
 * To find the amount, look at amount - coin. In this case, to fill in 4 for coin 1, look at amount at 4 - 1 = 3
 * There is 1 way to reach any given value using 1 coin: they're all ones. This is 1 + 0 throughout
 * Thus, our relationship is table[row][col] = table[row - 1][col] + table[row][col - coins[row - 1]]
 *
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []          1   0   0   0   0   0          (0)
 o [1]         1   1   1   1   1   1          (1)
 i [1, 2]      1   1   2   2   3   3          (2)
 n [1, 2, 5]   1                              (5)
 *
 * For 1, we can't use the 2 coin at all. So simply add the previous row's value. 1 + 0 = 1
 * For 2, we know that we can use two 1s or one 2. Using our relation: table[row][col] = table[row - 1][col] + table[row][col - coins[row - 1], we add table[1][2] + table[2][0]
 * For 5, we do 1 (from the previous coin of 1 way to get to 5) plus the value at amount 3, so 1 + 2 = 3
 *
 *
 *                     Amount
 *             0   1   2   3   4   5
 C []          1   0   0   0   0   0          (0)
 o [1]         1   1   1   1   1   1          (1)
 i [1, 2]      1   1   2   2   3   3          (2)
 n [1, 2, 5]   1   1   2   2   3   4          (5)
 *
 * Our final answers is table[coins.length][amount] = 4
 *
 * Time Complexity: O(amount * # of coins)
 * Space Complexity: O(amount * # of coins)
*/

//Using this approach, we get:
function coinSum3(coins, amount) {
  let table = Array(coins.length + 1).fill([]);
  for (let i = 0; i < table.length; i++) {
    table[i] = Array(amount + 1).fill(0);
    table[i][0] = 1;
  }
  
  //                        Amount
  //                  0   1   2   3   4   5
  // C []          1                              (0)
  // o [1]         1                              (1)
  // i [1, 2]      1                              (2)
  // n [1, 2, 5]   1                              (5)
  
  
  //After filling out our table by hand, we get:
  //                         Amount
  //               0   1   2   3   4   5
  // C []          1   0   0   0   0   0          (0)
  // o [1]         1   1   1   1   1   1          (1)
  // i [1, 2]      1   1   2   2   3   3          (2)
  // n [1, 2, 5]   1   1   2   2   3   4          (5)

  
  //And we find that the relationship is:
  //table[coin][amount] = table[coin - 1][amount] + table[coin][amount - coin]
  
  for (let coin = 1; coin < table.length; coin++) {
    for (let value = 1; value < table[0].length; value++) {
      table[coin][value] = table[coin - 1][value];
      if (value - coins[coin - 1] >= 0) {
        table[coin][value] += table[coin][value - coins[coin - 1]];        
      }
    }
  }
  return table[coins.length][amount]
}

console.log(coinSum2([1, 2, 3], 4)); //should output 4
console.log(coinSum2([1, 2, 5], 5)); //should output 4
console.log(coinSum2([1, 2, 4], 5)); //should also output 4
console.log(coinSum2([1, 3, 5, 7], 8)); //should output 6
