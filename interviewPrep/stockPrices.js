/*
 * You are given an array of prices where prices[i] is the price of a given stock on the ith day
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
 * future to sell that stock
 * You cannot buy and sell on the same day
 *
 * Return an array [ith_day_buy, _ith_day_sell, profit]
 *
 * input: [4, 3, 2, 1]
 * output: [0, 1, -1]
 *
 *
 * input: [1, 2, 3, 4]
 * output: [0, 3, 3]
 *
 * Do this in O(n)
 */

function stockPrices(prices) {

  //THIS IS A LITTLE BIT OFF
  let maxProfit = prices[1] - prices[0] ; //initialize to 1st difference
  let buyPrice = [prices[0], 0]; //initialize to 1st stock price and day
  let sellPrice = [prices[1], 1]; //initialize to 2nd stock price and day

  for (let i = 1; i < prices.length - 1; i++) {
    //current price is less than buy price
    if (prices[i] < buyPrice[0]) {
      buyPrice = [prices[i], i];
      sellPrice = [prices[i + 1], i + 1];
      maxProfit = Math.max(maxProfit, sellPrice[0] - buyPrice[0]);
    }
    else if (prices[i] > sellPrice[0]) {
      sellPrice = [prices[i], i];
    }
    console.log(sellPrice[0] - buyPrice[0]);
    maxProfit = Math.max(maxProfit, sellPrice[0] - buyPrice[0]);
  }
  return [buyPrice[1], sellPrice[1], maxProfit];
}

let input1 = [1, 2, 3, 4];

console.log(stockPrices(input1));
