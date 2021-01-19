/*

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/


//Pure recursion
//Time Complexity: O(2^n) (2 recursive calls each call)
function climbStairsPure(n) {
  if (n === 0) { //1 way to get to 0 (do nothing)
    return 1;
  }
  if (n === 1) { //1 way to get to 1 (move up 1)
    return 1;
  }
  if (n === 2) { //2 ways to get to 2 (move up 1 twice, or move up 2 once)
    return 2;
  }
  return climbStairsPure(n - 1) + climbStairsPure(n - 2);
};

console.log(climbStairsPure(6));


//Helper method Recursion
//Time Complexity: O(2^n) (2 recursive calls each call)
function climbStairsHelper(n) {
  function climb(n) {
    //1 way to get to 0 (do nothing)
    if (n === 0) {
      return 1;
    }

    //1 way to get to 1 (climb 1)
    if (n === 1) {
      return 1;
    }

    //2 ways to get to 2 (climb 1 twice or climb 2 once)
    if (n === 2) {
      return 2;
    }
    return climb(n - 1) + climb(n - 2);
  }
  return climb(n);
}

console.log(climbStairsHelper(6));


//Memoization
//Use memoization with a top down approach; typically recursion with a cache
//Time Complexity: O(2n) (Make n calls and for each of those, make 2 calls)
function climbStairsMemo(n) {
  let memo = {}; //create cache

  function climb(n) {
    //check memo/cache
    if (memo[n]) {
      return memo[n];
    }

    //1 way to get to 0 (do nothing)
    if (n === 0) {
      return 1;
    }

    //1 way to get to 1 (climb 1)
    if (n === 1) {
      return 1;
    }

    //2 ways to get to 2 (climb 1 twice or climb 2 once)
    if (n === 2) {
      return 2;
    }
    memo[n] = climb(n - 1) + climb(n - 2); //add value to cache
    return memo[n]; //return value so it can be used in recursive calls
  }
  return climb(n);
}

console.log(climbStairsMemo(6));

//Shortened memoization
function climbStairsMemo2(n, memo = {1: 1, 2: 2}) {
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = climbStairsMemo2(n - 1, memo) + climbStairsMemo2(n - 2, memo);
  return memo[n];
}

console.log(climbStairsMemo2(6));



//Tabulation
//Use tabulation when solutions to smaller problems can build up to incrementally larger solution (bottom up)
//Use a tabular data structure or array/matrix to solve the problem
//Time Complexity: O(n)

function climbStairsTab(n) {
  let steps = new Array(n + 1).fill(0);
  steps[0] = 1; //1 way to get to 0 (do nothing)
  steps[1] = 1; //1 way to get to 1 (move up 1)
//  steps[2] = 2; //2 ways to get to 2 (move up 1 twice or move up 2 once)

//  for (let i = 3; i < steps.length; i++) {
  for (let i = 2; i < steps.length; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  console.log(steps);
  return steps[n];
}

console.log(climbStairsTab(6));

//In this example, can climb, 2, 3, or 5 steps at a time
//cols: # of steps to climb
//rows: # of steps at a time

//   0 1 2 3 4 5 6 7 8 9 10
// 2:1 0 1                  step 0 has a value of 1, so step 2, must also
// Starts at step 0. 1 way to get there (do nothing). 0 for step 1 because we can only move 2, 3, or 5 steps

//   0 1 2 3 4 5 6 7 8 9 10
// 2:1 0 1 0 1 0 1 0 1 0 1         fill up row and carry values from step[0] through step[2]
// 3:1 0 1 1                       3rd step = 0thStep + 1stStep (0 + 3 and 1 + 2) = 1

//   0 1 2 3 4 5 6 7 8 9 10
// 2:1 0 1 0 1 0 1 0 1 0 1         
// 3:1 0 1 1 1 2 2 3 4 5 7         step[n] = step[n - 3] + step[n - 2]

//   0 1 2 3 4 5 6 7 8 9 10
// 2:1 0 1 0 1 0 1 0 1 0 1         
// 3:1 0 1 1 1 2 2 3 4 5 7        for 5, carry down values for step[0] through step[5] 
// 5:1 0 1 1 1 3                  step[5] = step[3] + step[2] + step[0]

//   0 1 2 3 4 5 6 7 8 9 10
// 2:1 0 1 0 1 0 1 0 1 0 1         
// 3:1 0 1 1 1 2 2 3 4 5 7        for 5, carry down values for step[0] through step[5] 
// 5:1 0 1 1 1 3 2 5 6 8 14       step[n] = step[n - 2] + step[n - 3] + step[n - 5]

/*
function climbStairsTab(n, jumps) {
  let stepsSum = 0;
  let steps = new Array(n + 1).fill(0);
  steps[0] = 1; //1 possible way to reach 0 steps

  //iterate through each type of jump
  for (let i = 0; i < jumps.length; i++) {

    //For each type of jump, iterate through length of steps array
    for (let j = jumps[i]; j < steps.length; j++) {
      for (let k = j + 1; k < jumps.length; k++) {
        stepsSum += steps[steps[j] - jumps[k]];
      }
    }
  }
  return stepsSum;
}
*/

