function ThreeSum(arr) {
  // code goes here
  if (arr.length <= 3) {
    return false;
  }

  let target = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = 2; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];

        if (sum === target) {
          return true;
        }
      }
    }
  }

  return false;
}

// keep this function call here
console.log(ThreeSum(readline()));
