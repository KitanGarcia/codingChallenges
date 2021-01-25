/*map of houses

if two adjacent homes robbed, security sounds


find total 


input: array of nonegative ints [how much money it has]
output: integer

        0    1    2    3    4    5
input [100, 200, 100, 500, 200, 300]

if we pick 0: 100
input [100, 200, 100, 500, 200, 300]


if we pick 2: 200
input [100, 200, 100, 500, 200, 300]


if we pick 4: 400
input [100, 200, 100, 500, 200, 300]



        0    1    2    3    4    5
input [100, 200, 100, 500, 200, 300]

if we pick 1: 200
input [100, 200, 100, 500, 200, 300]


if we pick 3: 700
input [100, 200, 100, 500, 200, 300]


if we pick 5: 1000
input [100, 200, 100, 500, 200, 300]
        L                        R

// prev is i - 1;
// next is i + 1;
// if at i, then i+1 and i-1 can't be used
// sum 

for (i from 0 to end of array) {
}

//if i > 


Constraints:
  Time: O(N)
  Space Complexity: O(N)
  Space Complexity: could be O(1)



*/


//RECURSIVE TOP-DOWN
function robHousesRecTopDown(array) {
  function rob(index) {
    if (index < 0) {
      return 0;
    }
    return Math.max(rob(index - 2) + array[index], rob(index - 1));
  }

  //top down, so we start at the end
  return rob(array.length - 1);
}

//RECURSIVE + MEMO TOP-DOWN
function robHousesRecTable(array) {
  //initialize to -1 since 0 is a valid amount to steal
  let table = new Array(array.length + 1).fill(-1);

  function rob(index) {
    if (index < 0) {
      return 0;
    }
    //since all values are positive, this tells us we've filled the table
    if (table[index] >= 0) {
      return table[index];
    }
    table[index] = Math.max(rob(index - 2) + array[index], rob(index - 1));
    return table[index];
  }
  return rob(array.length - 1);
}



//DP SOLUTION
/*
  ALL THE NUMBERS ARE POSITIVE, SO GOING THROUGH TO THE END OF THE LIST WILL ALWAYS BE BETTER THAN STOPPING PART OF THE WAY WHEN CONSIDERING THE MAX

  For array [1, 2]
  dp is [0, 1, 2]

  For array [1, 2, 3, 1]
  dp is [0, 1, 2, 4, 4]



  For array [100, 200, 100, 500, 200, 300]
  dp is [0, 100, 200, 200, 700, 700, 1000]

 */
function robHousesDP(array) {
  if (array.length === 0) {
    return 0;
  }
  let dp = new Array(array.length + 1).fill(0);

  dp[0] = 0; //max we can rob from 0 houses
  dp[1] = array[0]; //max we can rob from 1 house

  //every element of our array will be the max we can rob from i houses

  //start at 1 since we assign array[0] already
  for (let i = 1; i < array.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + array[i]);
  }

  return dp[array.length];
}

//LIKE DP SOLUTION, BUT NO NEED FOR WHOLE TABLE, JUST 2 VALS
function robHouses(array) {
  if (array.length === 0) {
    return 0;
  }

  let prev1 = 0;
  let prev2 = 0;
  let temp;

  //start at 1 since we assign array[0] already
  for (let i = 0; i < array.length; i++) {
    temp = prev1;
    prev1 = Math.max(prev2 + array[i], prev1);
    prev2 = temp;
  }

  return prev1;
}


console.log(robHousesRecTopDown([300, 200]));
console.log(robHousesRecTopDown([100, 200, 100, 500, 200, 300]));
console.log(robHousesRecTopDown([4, 1, 2, 100]));


console.log(robHousesRecTable([300, 200]));
console.log(robHousesRecTable([100, 200, 100, 500, 200, 300]));
console.log(robHousesRecTable([4, 1, 2, 100]));


console.log(robHousesDP([300, 200]));
console.log(robHousesDP([100, 200, 100, 500, 200, 300]));
console.log(robHousesDP([4, 1, 2, 100]));


console.log(robHouses([300, 200]));
console.log(robHouses([100, 200, 100, 500, 200, 300]));
console.log(robHouses([4, 1, 2, 100]));
