/*
Leetcode 122
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 */

/*
  Decide to buy/sell or not


  keep track of index and sum

  helper(index, sum)

  choose to buy: sum += prices[index], index++
  no action: sum, index++

                                          index,sum,max
                          0,-7,0                                    0,0,0
             1,-6,0                1,-7,0              1,-1,0                   0,0,0
       2,-7,0      2,-6,0    2,-2,0      2,-7,0   2,4,4      2,-1,0       2,-5,0
 */
const maxProfit = (prices) => {
  let max = [];

  const helper = (index, sum, hasStock) => {
    if (index >= prices.length) {
      max = Math.max(max, sum);
      return;
    }

    if (hasStock) {
      // Sell
      helper(index + 1, sum + prices[index], false);
    } else {
      // Buy
      helper(index + 1, sum - prices[index], true);
    }

    // Don't buy
    helper(index + 1, sum, hasStock);
  };

  helper(0, 0, false);

  return max;
};

let prices1 = [7, 1, 5, 3, 6, 4]; // 7
let prices2 = [1, 2, 3, 4, 5]; // 4
let prices3 = [7, 6, 4, 3, 1]; // 0

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
