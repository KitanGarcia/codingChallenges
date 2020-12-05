/*
 * Students are asked to standing in non-decreasing order of heights for an annual photo
 *
 * Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height
 *
 * Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats
 *
 * input:
 * heights = [1, 1, 4, 2, 1, 3]
 * output: 3
 *
 * heights = [5, 1, 2, 3, 4]
 * output: 5
 *
 *
 */

/*
 * [5, 1, 2, 3, 4]
 *  i
 *
 *
 * array of 0s. If they switch to one, that student will be involved
 * [5, 4, 2, 3, 1]
 * [0, 0, 0, 0, 0]
 *
 *  i
 * [5, 1, 2, 3, 4]
 * [1, 1, 1, 1, 1]
 *
 *
 * another example
 *  i
 * [1, 1, 4, 2, 1, 3]
 * [0, 0, 0, 0, 0, 0]
 * 
 * i iterates through
 *   j starts at i + 1
 *   if input[j] < input[i]
 *     toggle count[i], count[j]
 *
 * This will not work
 *
 *
 *
 * BUT
 * We can try sorting and then comparing to the original
 */

function checkHeights(heights) {
  //if we just use .sort(), it would sort 10 before 2
  let sorted = heights.slice().sort((a, b) => {
    return a - b;
  });

  console.log("SORTED: ", sorted);
  console.log("ORIGINAL: ", heights);

  //count will be the number of elements out of line between the sorted and unsorted arrays
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== heights[i]) {
      count++;
    }
  }
  return count;
}

//ANOTHER SOLUTION
function checkHeights2(heights) {
    const arr = heights.slice().sort((a,b)=>a-b);
    return heights.reduce((a,c,i)=> c == arr[i] ? a : a+1,0);
}

console.log(checkHeights([1, 1, 4, 2, 1, 3]));
