/*
 * Leetcode 22
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/*
                                          (
                   ((                                              ()
       (((                    (()                          ()(                ())
           ((()        (()(         (())             ()((        ()()    ())(      ()))
            ((())  (()((  (()()             ()((        ()()    ())(      ()))


                                          ""
                (                                           )
        ((            ()                           )(                ))
          (()     ()(     ())                )((        )()      ))(      )))
              (())
*/
var generateParenthesis = function (n) {
  let result = [];

  const generate = (openCount, closedCount, combo) => {
    if (openCount > n) {
      return;
    }
    if (closedCount > n) {
      return;
    }

    if (openCount === n && closedCount === n) {
      result.push(combo);
      return;
    }

    // open parenthesis
    generate(openCount + 1, closedCount, combo + "(");

    // close parenthesis
    if (openCount > closedCount) {
      generate(openCount, closedCount + 1, combo + ")");
    }
  };

  generate(0, 0, "");
  return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
