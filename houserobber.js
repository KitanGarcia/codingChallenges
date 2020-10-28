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

function robHouses(array) {
  let sum = 0;
  let start = 0;
  if (array[i]  > array[i + 1]) {
    start = array[i];
  }
  for (let i = start; i < array.length; i = i + 2) {
    sum = sum + array[i];//need to come back to this
  }
}

console.log(robHouses([100, 200, 100, 500, 200, 300]);
