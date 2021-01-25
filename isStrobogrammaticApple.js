/*
 * A strobogrammatic number is a number that looks the same when rotate 180 degrees (looked at upside down);
 *
 * Write a function to determine if a number is strobogrammatic. The number is represented as a string
 *
 *
 * Input: num = "69"
 * Output: true;
 *
 *
 * Input: num = "88"
 * Output: true;
 *
 *
 * Input: num = "962"
 * Output: false;
 *
 *
 * Input: num = "1"
 * Output: true;
 */


/*
 * Possible numbers that could be something when rotated 180 degrees:
 * 0 -> 0
 * 1 -> 1
 * 8 -> 8
 * 6 -> 9
 * 9 -> 6
 * 5 -> 5
 * 2 -> 2
 *
 * Maybe:
 * 5 -> 2
 * 2 -> 5
 *
 *
 * Approach:
 * Have pointer at start and pointer at end
 * check mapping between pointer1 and pointer2
 */

function isStrobogrammatic(num) {
  const library = {
    "0": "0",
    "1": "1",
    "8": "8",
    "6": "9",
    "9": "6"
  }

  let i = 0;
  let j = num.length = 1;

  while (i <= j) {
    let leftChar = num[i];
    let rightChar = num[j];

    //if number is not in the libraryrary
    if (!(leftChar in library)) {
      return false;
    }

    //if left mapping doesn't equal right character
    if (library[leftChar] !== rightChar) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

console.log(isStrobogrammatic("8118"));
console.log(isStrobogrammatic("88"));
console.log(isStrobogrammatic("69"));
console.log(isStrobogrammatic("962"));
console.log(isStrobogrammatic("1"));
