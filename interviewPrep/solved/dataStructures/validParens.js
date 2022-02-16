//LeetCode 20
function isValid(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0) {
      return false;
    }
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }
    else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      let die = stack.pop();
      if (
        (die === "(" && str[i] === ")") ||
        (die === "{" && str[i] === "}") ||
        (die === "[" && str[i] === "]")) {
        continue;
      }
      else {
        return false
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

console.log(isValid("()[]{}"));
