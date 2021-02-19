/*
  Given a string str of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.

  Input: "abc"
  Output: ["ABC", "ABc", "AbC", "aBC", "Abc", "aBc", "abC", "abc"]


  Advanced: Make it work with string with numbers too

  Input: "A1d3"
  Output: ["A1D3", "a1D3", "A1d3", "a1d3"]


        2 choices: capitalize at new index. Or, add lowercase

                               
                                ''
                    A                           a 
        AB               Ab                aB        ab
 */

function capitalPermutations(input) {
  let results = [];

  function permute(subString, index) {
    if (subString.length === input.length) {
      results.push(subString);
      return;
    }

    let newChar = input[index];

    //if current char is a letter
    if (newChar.toLowerCase() !== newChar.toUpperCase()) {
      let lowerCase = newChar.toLowerCase();
      let capitalized = newChar.toUpperCase();

      permute(subString + capitalized, index + 1); //capitalize
      permute(subString + lowerCase, index + 1); //don't capitalize
    }

    //current char not a letter
    else {
      permute(subString + newChar, index + 1);
    }
  }
  permute("", 0);

  return results;
}

console.log(capitalPermutations("abc"));
console.log(capitalPermutations("A1d3"));
