/*
Leetcode 122
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 */

const maxProfitDP = (prices) => {
  const n = prices.length;
  // Too small to buy and sell for a profit
  if (n < 2) {
    return 0;
  }

  // Create an array for purchases and sales
  const buy = new Array(n).fill(0);
  const sell = new Array(n).fill(0);

  buy[0] = -prices[0]; // the first possible purchase
  sell[0] = 0; // no profit initially

  for (let i = 1; i < n; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]); // buying on or before i
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]); // selling on or before i
  }

  return sell[n - 1];
};

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
  let memo = {};

  const helper = (index, sum, hasStock, max) => {
    if (index >= prices.length) {
      return Math.max(max, sum);
    }

    let key = `${index}_${sum}_${hasStock}_${max}`;
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    memo[key] = max;

    if (hasStock) {
      // Sell
      max = helper(index + 1, sum + prices[index], false, max);
    } else {
      // Buy
      max = helper(index + 1, sum - prices[index], true, max);
    }

    // Don't buy
    max = helper(index + 1, sum, hasStock, max);

    return max;
  };

  return helper(0, 0, false, 0);
};

let prices1 = [7, 1, 5, 3, 6, 4]; // 7
let prices2 = [1, 2, 3, 4, 5]; // 4
let prices3 = [7, 6, 4, 3, 1]; // 0
let prices4 = [7, 1, 5]; // 4

console.log(maxProfitDP(prices1));
console.log(maxProfitDP(prices2));
console.log(maxProfitDP(prices3));
console.log(maxProfitDP(prices4));
