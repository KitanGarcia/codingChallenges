/*                          
Given a set of items where each item has a weight and a value. And given a knapsack with max weight capacity, determine the maximum value that can be placed into the knapsack without going over the capacity.

Input: An integer array of weights
       An integer array of values
           (The ith item has weights[i] and values[i])
       Integer value of the max weight capacity of the knapsack
Output: Integer of maximum total value


Input:
  weights = [10, 20, 30]
  values =  [60, 100, 120]
  capacity = 50

Output: 220
*/


/*
  weights = [10, 20, 30]
  values =  [60, 100, 120]
  capacity = 50

  Can't exceed 50 weight

  add weights 0 and 1. If above 50, add weights 0 and 2
    If below 50:
      Set sum of weights as current weight
      Add val0 and val1
      Set sum as current max



                                                    0,0
                            10,10                                                 10,00
                             60                                                      0
           20,30                       20,10                        20,20                         20,00 
            160                          60                          100                             0
    30,60            30,30       30,40          30,10      30,50            30,20           30,30          30,00 
     280               160         180             60        220              100             120             0
 */

//Time Complexity: O(2^n)
//Space Complexity: O(1)
function knapsack(weights, values, capacity) {
  let max = 0;

  function helper(currItem, currWeight, currVal) {
    let newWeight = currWeight + weights[currItem];
    let newVal = currVal + values[currItem];

    if (newWeight > capacity) {
      return;
    }
    if (currItem >= weights.length) {
      return;
    }

    if (max < newVal) {
      max = newVal;
    }

    //take item and add weight
    helper(currItem + 1, newWeight, newVal);

    //look at next item
    helper(currItem + 1, currWeight, currVal);
  }
  helper(0, 0, 0);

  return max;
}

//Time Complexity: O(kn)
//Space Complexity: O(k)
//where k is the capacity of the knapsack


function knapsackTabulation(weights, values, capacity) {
  let finalMax = new Array(capacity + 1).fill(0);

  //loop through items
  for (let i = 0; i < weights.length; i++) {
    let weight = weights[i];
    let value = values[i];
    let tempMax = finalMax.slice(); //make copy of finalMax array

    //loop through size of capacity
    for (let cap = 0; cap <= capacity; cap++) {
      if (cap - weight >= 0) {
        //choose between taking the item or not?
        tempMax[cap] = Math.max(tempMax[cap], finalMax[cap - weight] + value);
      }
    }
    finalMax = tempMax;
  }
  console.log(finalMax);
  return finalMax[capacity];
}

console.log(knapsack([10, 20, 30], [60, 100, 120], 50)); //should output 220
console.log(knapsack([5, 4, 6, 3], [10, 40, 30, 50], 10)); //should output 90
console.log(knapsack([1, 2, 3, 8, 7, 4], [20, 5, 10, 40, 15, 25], 10)); //should output 60


console.log(knapsackTabulation([10, 20, 30], [60, 100, 120], 50)); //should output 220
console.log(knapsackTabulation([5, 4, 6, 3], [10, 40, 30, 50], 10)); //should output 90
console.log(knapsackTabulation([1, 2, 3, 8, 7, 4], [20, 5, 10, 40, 15, 25], 10)); //should output 60
