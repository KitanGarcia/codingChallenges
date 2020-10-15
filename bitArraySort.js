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

console.log(bitArraySort(input));
