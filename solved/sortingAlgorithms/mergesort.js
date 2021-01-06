let joinArrays = function(arr1, arr2) {
  //set up 2 pointers
  let p1 = 0;
  let p2 = 0;
  let result = []; //array that we will build up


  if (!arr1) {
    return arr2;
  }
  else if (!arr2) {
    return arr1;
  }

  //if there are indices to traverse, compare arr1 and arr2 and place the lesser values in the result
  while (arr1[p1] && arr2[p2]) {
    //stable: elements that appear earlier in array if equal to others are represented earlier in the result
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    }
    else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  //pointer reaches end of one array first, add the rest of the other array to result
  if (p1 === arr1.length) {
    result = result.concat(arr2.slice(p2));
  }
  else if (p2 === arr2.length) {
    result = result.concat(arr1.slice(p1));
  }
  return result;
}

let mergeSort = function(input) {
  if (input.length <= 1) {
    return input;
  }
  let midIndex = Math.floor(input.length / 2);
  let left = input.slice(0, midIndex);
  let right = input.slice(midIndex, input.length);

  return joinArrays(mergeSort(left), mergeSort(right));
}

let i = 1000;
let test = [];
while (i--) {
  test.push(Math.floor(1000* Math.random()));
}
console.log(mergeSort(test));
