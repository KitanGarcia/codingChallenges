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
