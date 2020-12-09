/*
 * Given a string str of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.
 *
 * Input: "abc"
*  Output: ["ABC", "ABc", "AbC", "aBC", "Abc", "aBc", "abC", "abc"]
*
*  Constraints:
*  Time Complexity: O(2^N)
*  Space Complexity: O(2^N)
*  Ordering does not matter
 */

function permuteCaps(string) {
  let result = [];

  function permute(substring, index) {
    if (substring.length === string.length) {
      result.push(substring);
      return;
    }

    if (!isNaN(string[index])) {
      permute(substring + string[index], index + 1);
    }
    else if (string[index] === string[index].toUpperCase()) {
      permute(substring + string[index].toLowerCase(), index + 1);
      permute(substring + string[index], index + 1);
    }
    else if (string[index] === string[index].toLowerCase()) {
      permute(substring + string[index].toUpperCase(), index + 1);
      permute(substring + string[index], index + 1);
    }
  }
  permute("", 0);
  return result;
}

console.log(permuteCaps("abc1e"));
