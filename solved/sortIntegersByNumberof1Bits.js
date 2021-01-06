/*
 
Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the sorted array.


Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

Input: arr = [10000,10000]
Output: [10000,10000]

Input: arr = [2,3,5,7,11,13,17,19]
Output: [2,3,5,17,7,11,13,19]
 */

function sortByBits(arr) {
  const memo = {}; //holds number of bits
  
  arr.sort((a, b) => {
    //set memo
    if (!(a in memo)) {
      memo[a] = findBits(a);
    }
    if (!(b in memo)) {
      memo[b] = findBits(b);
    }
    //check if they have the same number of bits
    if (memo[a] === memo[b]) {
      return a - b; //sort normal ascending
    }
    else {
      return memo[a] - memo[b]; //sort asce
    }
  });
  return arr;
}

//counts the number of 1 bits of a number
function findBits(n) {
  let x = 0; //number of bits
  
  //go until n = 0
  while (n > 0) {
    x += n & 1; //n & 1 is only 1 if rightmost bit is 1
    n >>= 1; //right shift 1
  }
  return x;
}




//ANOTHER SOLUTION
function sortByBits2(arr) {
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

const bitCount = num => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
console.log(sortByBits2([0,1,2,3,4,5,6,7,8]));
