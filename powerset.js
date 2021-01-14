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



//CORRECT SOLUTION O(2^N)
function powerset2(str) {
  let result = [];
  let result2 = [];
  function calculate(substring) {
    if (substring.length === str.length) {
      result.push(substring);
      return;
    }
    calculate(substring + "0");
    calculate(substring + "1");
  }

  calculate("");


  for (let i = 0; i < result.length; i++) {
    let tempString = "";
    if (result[i][0] == 1) {
      tempString += "a";
    }
    if (result[i][1] == 1) {
      tempString += "b";
    }
    if (result[i][2] == 1) {
      tempString += "c";
    }
    result2.push(tempString);
  }
  return result2;
}




console.log("-----------------");
console.log("-----------------");

console.log(powerset2("ab"));
console.log(powerset2("abc"));
console.log(powerset3("abc"));
