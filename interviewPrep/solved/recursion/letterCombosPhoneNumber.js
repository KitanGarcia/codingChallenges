/*
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }
  let hash = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  const array = digits.split('');
  const result = [];

  function recurse(digitIndex, combo) {
    let digit = array[digitIndex];
    if (combo.length === array.length) {
      result.push(combo);
      return;
    }

    for (let i = 0; i < hash[digit].length; i++) {
      recurse(digitIndex + 1, combo + hash[digit][i]);
    }
  }

  recurse(0, "");

  return result;
};

console.log(letterCombinations("23"));
console.log("=====================");
console.log(letterCombinations("234"));
console.log(letterCombinations(""));
/*
 *
 *                                                                                             0,0,""
 *                                         0,0,"a"                                             0,1,"b"                                       0,3,"c"
 *                 1,0,"ad"                1,1,"ae"        1,2,"af"              1,0,"bd"      1,1,"be"        1,2,"bf"      1,0,"cd"        1,1,"ce"           1,2,"cf"
 *
 *
 *
 *
 */


