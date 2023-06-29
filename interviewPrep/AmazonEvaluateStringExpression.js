/*
 * Given a mathematical expression as a string, return the output
 * Adhere to Order of Operations
 * Input: 2 + (11 + 4) / 3 - 1
 * Output: 6
 *
 * Input: 2 + 3 - 1
 * Output: 4
 */

const compute = (left, right, symbol) => {
  left = parseFloat(left);
  right = parseFloat(right);

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

const evaluateStringExpression = (expression) => {
  // ie. [3, +, 12, /, 3]
  // ie. [12, /, 3, +, 3]
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

const multiplyAndDivide = (elements) => {
  let simplified = [];
  let previousIndex = 0;
  console.log("elements", elements);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "*" || elements[i] === "/") {
      let lastNumber = simplified[simplified.length - 1] || elements[i - 1];
      console.log("LAST", lastNumber);
      let result = compute(lastNumber, elements[i + 1], elements[i]).toString();
      let previousChunk = elements.slice(previousIndex, i - 1);
      console.log("result", result);
      console.log("previousChunk", previousChunk);

      let rejoined = simplified.concat(previousChunk);
      console.log("rejoined", rejoined);

      if (!isNaN(rejoined[rejoined.length - 1])) {
        rejoined[rejoined.length - 1] = result;
      } else {
        rejoined.push(result);
      }

      simplified = rejoined;
      previousIndex = i + 1;
    }
  }

  if (previousIndex < elements.length) {
    let restOfArray = elements.slice(previousIndex + 1);
    return simplified.concat(restOfArray);
  }
  console.log("prev index", previousIndex);
  console.log("simplified", simplified);
  return simplified;
};

//console.log(multiplyAndDivide(["3", "+", "12", "/", "3"]));
//console.log(multiplyAndDivide(["3", "+", "12", "/", "3", "*", "4"]));
//console.log(multiplyAndDivide(["3", "+", "12", "/", "3", "*", "4", "/", "2"]));
console.log(multiplyAndDivide(["3", "+", "12", "/", "3", "*", "4", "+", "2"]));
console.log(
  multiplyAndDivide(["3", "+", "12", "/", "3", "*", "4", "+", "2", "/", "2"])
);
//console.log(multiplyAndDivide(["12", "/", "3", "+", "3"]));
console.log("============================");

/*
const evaluateStringExpression = (expression) => {
  // ie. [3, +, 12, /, 3]
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
*/

//console.log(evaluateStringExpression("2 + (11 + 4) / 3 - 1"));
console.log(evaluateStringExpression("2 + 3 - 1"));
console.log(evaluateStringExpression("3 / 3 / 3"));
console.log(evaluateStringExpression("3 + 12 / 3"));
