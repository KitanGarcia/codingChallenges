//for abc: yield ["", "a", "b", "c", "ab", "bc", "ac", "abc"]
//this is a combination NOT a permutation


/*
                                     ""
                        a             b              c
                    ab    ac      ab    ac        ac    bc
                  abc ab ac abc abc ab ac abc    abc
 *
 

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
