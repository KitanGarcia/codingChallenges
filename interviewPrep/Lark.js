/*
Example 1
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/

function decode(input) {
  function recurse(index, result, substring, multiplier) {
    if (substring[index] === "]") {
      //SHOULD PROBABLY JUST ADD FRAGMENT TO RESULT. LET THE REST HANDLE
      let fragment = substring.slice(0, index);
      console.log("fragment")
      console.log(fragment);
      return result + fragment.repeat(multiplier);
    }
    if (index >= substring.length) {
      return result;
    }
    
    if (substring[index] == "[") {
      let newMultiplier = parseInt(substring[index - 1]);
      let newSubstring = substring.slice(index + 1);
      return recurse(0, result, newSubstring, newMultiplier);
    }

    else {
      result += substring[index];
      return recurse(index + 1, result, substring, multiplier);
    }
  }
  let result = recurse(0, "", input, 1);
  console.log(result);
  console.log("FINAL");
  return recurse(0, "", input, 1);
}



/*
                               slice substring from bracket
                               a2[c]]
                               if char is ]
                                  then return         
                                
                                iterate through  
                                
                                
                              3[a2[c]]
                                              keep 3
                                a2[c]
                                            save 2
                                   expand: cc
                                   combine
                                acc
                              accaccacc
                                                    
*/

/*
  define result
  loop through string
    if we find int
      look inside brackets
      loop through until we find terminating char bracket (maybe number)
         add above to our result
         continue first loop
*/
//number.isInteger()

/*
function decode(input) {
  let result = "";

let input3 = "abc3[cd]xyz"


  function traverse(substring, multiplier, index) {
    console.log(substring);
    if (index === input.length) {
      console.log("END OF INPUT: " + substring);
      result += substring.repeat(multiplier);
      return substring.repeat(multiplier);
    }

    //what if ] is the last char
    if (substring[index] === "]") {
      console.log("SUBSTRING: " + substring);
      console.log("SUBSTRING: " + substring);

      let final = substring.slice(0, index);
      console.log("FINAL: " + final);

      result += final.repeat(multiplier);
      return substring.repeat(multiplier);
    } 

    console.log("=========================================");

    if (!isNaN(parseInt(substring[index], 10))) {


      //save value of multiplier
      let newMult = parseInt(substring[index]);

      //separate substring
      let newSubstring = substring.slice(index + 2); //includes everything following also

      //call traverse on new substring and index
      traverse(newSubstring, newMult, 0);
    }

    else {
      result += substring[index];
      traverse(substring, 1, index + 1);
    }
  }

  traverse(input, 1, 0);
  return result;
}
*/

/*
                               slice substring from bracket
                               a2[c]]
                               if char is ]
                                  then return         
                                
                                iterate through  
                                
                                
                              3[a2[c]]
                                              keep 3
                                a2[c]
                                            save 2
                                   expand: cc
                                   combine
                                acc
                              accaccacc
                                                    
*/



let input1 = "3[a]2[bc]";
let input2 = "3[a2[c]]"
let input3 = "abc3[cd]xyz"
console.log(decode(input3));
