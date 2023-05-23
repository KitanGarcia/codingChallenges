/*
 * Given a mathematical expression as a string, return the output
 * Adhere to Order of Operations
 * Input: 2 + (11 + 4) / 3 - 1
 * Output: 6
 *
 * Input: 2 + 3 - 1
 * Output: 4
 */

const evaluateStringExpression = (expression) => {
  let result = null;

  // ie. [2, +, 3, -, 1]
  let elementsQueue = expression.split(" ");
  while (elementsQueue.length > 1) {
    let left = parseFloat(elementsQueue[0]);
    let symbol = elementsQueue[1];
    let right = parseFloat(elementsQueue[2]);

    let result = compute(left, right, symbol);

    elementsQueue.shift();
    elementsQueue.shift();
    elementsQueue[0] = result;
  }

  return elementsQueue[0];
};

const compute = (left, right, symbol) => {
  if (symbol === "+") {
    return left + right;
  }
  if (symbol === "-") {
    return left - right;
  }
  if (symbol === "*") {
    return left * right;
  }
  if (symbol === "/") {
    return left / right;
  }
  return null;
};

//console.log(evaluateStringExpression("2 + (11 + 4) / 3 - 1"));
console.log(evaluateStringExpression("2 + 3 - 1"));
console.log(evaluateStringExpression("3 / 3 / 3"));
