let input = [4,2,6,5,7,9,10];
let sum = 13;

//return true if there are two integers that add to the sum
//
function twoSum(input, sum) {
  let hash = {};
  let difference = sum;
  for (let i = 0; i < input.length; i++) {
    hash[input[i]] = i;
    difference = sum - input[i];
    if (hash.hasOwnProperty(difference)) {
      console.log(hash);
      return true;
    }
  }
  console.log(hash);
  return false;
}

console.log(twoSum(input, sum));
