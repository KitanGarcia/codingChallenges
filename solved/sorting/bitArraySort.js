let input = [0, 1, 1, 0, 1, 1, 1, 0];

//Given a bit array, return it sorted in place

function bitArraySort(arr) {
  let arrayCounts = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrayCounts[0]++;
    }
    else if (arr[i] === 1) {
      arrayCounts[1]++;
    }
  }
  console.log(arrayCounts);

  let zeros = Array(arrayCounts[0]).fill(0);
  let ones = Array(arrayCounts[1]).fill(1);
  let sortedArray = zeros.concat(ones);
  
  return sortedArray;
}


//BETTER SOLUTION
//Time: O(n)
//Space: O(1)
function bitArraySort2(arr) {
  let left = 0;
  let right = arr.length - 1;

  //move a pointer on either side of the array towards each other and swap if they come across a 0 or 1
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    while (arr[right] === 1) {
      right--;
    }
    //swap if left smaller
    if (left < right) {
      [ arr[left], arr[right] ] = [ arr[right], arr[left] ];
    }
  }
  return arr;
}


//BEST SOLUTION
//Time: O(n)
//Space: O(1)
function bitArraySortr(arr) {
  let mid = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [ arr[mid], arr[i] ] = [ arr[i], arr[mid] ];
      mid++;
    }
  }
  return arr;
}

console.log(bitArraySort(input));
console.log(bitArraySort2(input));
