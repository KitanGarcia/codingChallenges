//for abc: yield ["", "a", "b", "c", "ab", "bc", "ac", "abc"]
//this is a combination NOT a permutation


//BEST RECURSIVE SOLUTION
/*
 *                                         ""
 *                     a                                         ""
 *        ab                      a                   b                        ""
 *  abc         ab         ac          a        bc          b            c             ""
 *
 *  Our two choices are add input[i] or do nothing
 */

//no need to memoize since we just want what is at the bottom of the tree
function powerset3(input) {
  let result = [];
  let memo = {};
  function findSubsets(substring, index) {
    if (index >= input.length) {
      result.push(substring);
      return;
    }
    findSubsets(substring + input[index], index + 1);
    findSubsets(substring, index + 1);
  }
  findSubsets("", 0);
  return result;
}




//This gives all permutations; not quite what we're looking for
//Should remove duplicates here
//ie. abc and cab should count as the same
function powerset(str) {
  let result = [];
  function calculate(substring) {
    if (substring.length === str.length) {
      result.push(substring);
      return;
    }
    result.push(substring);
    for (let i = 0; i < str.length; i++) {
      calculate(substring + str[i]);
    }

  }
  calculate("");
  return result;
}

console.log(powerset("ab"));
console.log(powerset("abc"));



/*
binary switch
a b c
0 0 0
0 0 1
0 1 0
0 1 1
1 0 0
1 0 1
1 1 0
1 1 1

2^N combinations
*/

//CORRECT SOLUTION
//O(2^n) for findCombos?
//O(n^2) for double for loop, BUT the outer loop is 2^n iterations and inner is n
//Time Complexity: O(2^n)?
//Space Complexity: O(2^n)
function powerset2(input) {
  let combos = [];
  function findCombos(substring) {
    if (substring.length === input.length) {
      combos.push(substring);
      return;
    }
    findCombos(substring + "1");
    findCombos(substring + "0");
  }
  
  findCombos("");


  let result = [];
  for (let i = 0; i < combos.length; i++) {
    let string = combos[i];
    let resultString = "";
    for (let j = 0; j < string.length; j++) {
      if (string[j] === "1") {
        resultString += input[j];
      }
    }
    result.push(resultString);
  }
  return result;
}




console.log("-----------------");
console.log("-----------------");

console.log(powerset2("ab"));
console.log(powerset2("abc"));
console.log(powerset2("abcd"));

console.log("-----------------");
console.log("-----------------");
console.log(powerset3("ab"));
console.log(powerset3("abc"));
console.log(powerset3("abcd"));
