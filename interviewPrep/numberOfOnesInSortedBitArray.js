//this must be done in O(log(N)) time

let input = [0,0,0,1,1,1,1,1,1,1,1];
//                     1
//               0
//                   1




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




async function countOnes(array) {
  let end = array.length - 1;
  let start = 0;
  let  mid = Math.floor((start + end) / 2);

  if (array[start] == 1) {
    return end + 1;
  }
  else if (array[end] == 0) {
    return 0;
  }


  //while condition may need to change
//`  while (array[start + 1] != 1 && array[end - 1] != 0) {
  while (1) {
//  while (array[mid - 1] != 0 && array[mid + 1] != 1) {
//  while (array[start] < 1) {
//  while (array[start] < 1 && array[end] > 0) {
    await sleep(500);
//    mid = Math.floor(start + end / 2);
    mid = Math.floor((end + start) / 2);
    console.log("\n");
    console.log("\n");
    console.log("END IS: " + end);
    console.log("START IS: " + start);
    console.log("END + START = " + (end + start));
    console.log("MID SHOULD BE " + Math.floor((end + start) / 2));
    console.log("MID IS: " + mid);



    if (array[start + 1] == 1 && array[end - 1] == 0) {
      console.log(array.length - (start + 1));
      return array.length - (start + 1);
    }
    if (array[mid] == 0) {
      console.log("Array is " + array[mid] + " at " + mid);
      start = mid;
      console.log("Start adjusted to " + start);
    }
    else if (array[mid] == 1) {
      console.log("Array is " + array[mid] + " at " + mid);
      end = mid;
      console.log("End adjusted to " + end);
    }
  }
  return -1;
}

console.log(countOnes(input));
