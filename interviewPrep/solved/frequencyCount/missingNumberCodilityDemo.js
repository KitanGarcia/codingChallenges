/*
Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

//O(N) SOLUTION
function solution(A) {
    //check array length
    if (A.length === 0) {
        return 1;
    }
    
    //initialize set
    let set = new Set();
    
    //add each element to the set
    A.forEach(element => set.add(element));
    
    //go from 1 to set length. If the number is not in the set, return that number;
    for (let i = 1; i <= A.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    
    //if all numbers are in the set, then return the next number higher than the max
    return Math.max(...A) + 1;
}

let input1 = [1, 2, 4, 5, 6, 7];
let input2 = [1, 2, 3, 4, 5, 6, 7];
let input3 = [5, 5, 5, 5];
let input4 = [1, 2, 3];
let input5 = [-1, -3];
let input6 = [0, 1, 1, 1, 1];
let input7 = [1, 2, 3, 4, 6];
let input8 = [-1];
let input9 = [4];
let input10 = [4, 3, 2, 7, 9, 1, 8, 5, 6, 10, 12, 13, 14, 15];
let input11 = [2];

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
console.log(solution(input4));
console.log(solution(input5));
console.log(solution(input6));
console.log(solution(input7));
console.log(solution(input8));
console.log(solution(input9));
console.log(solution(input10));
console.log(solution(input11));
