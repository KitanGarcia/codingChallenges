//work is input array
let quicksort = function(work) {
  //return array when it is of length 1 or 0
  if (work.length <= 1) {
    return work;
  }

  //define pivot as middle element
  let pivotIndex = Math.floor(work.length / 2);
  let pivot = work[pivotIndex];

  //define arrays before and after pivot
  let before = [];
  let after = [];

  //push everything <= pivot on before array and everything > pivot on after array
  for (let i = 0; i < work.length; i++) {
    //don't act on pivot element
    if (i !== pivotIndex) {
      if (work[i] <= pivot) {
        before.push(work[i]);
      }
      else {
        after.push(work[i]);
      }
    }
  }
  return quicksort(before).concat(pivot).concat(quicksort(after));
}

let input = [3, 4, 2, 7, 5, 1, 6, 9]
console.log(quicksort(input));


//[3, 4, 2, 7, 5, 1, 6, 9]
//pivot = 5
//[3, 4, 2, 1] 5 [7, 6, 9]
//pivot = 4 and 6
//[3, 2, 1] 4 5 6 [7, 9]
//pivot = 2 and 7
//[1] 2 [3] 4 5 6 7 [9]
//pivot = 1, 3, 9
//1 2 3 4 5 6 7 9
