/*
Given a string, cycle the first letter of each word back one word,
and cycle the last letter of each word forward one word. 

Example input:  "who welld horly"
Example output: "why hello world"

Do this example by hand:
Input:  "bes le uoogit"
Output: "let us boogie"
*/

const cycle = (input) => {
  if (input.length === 0 || typeof input !== "string") {
    console.log(typeof input !== "string");
    return "";
  }

  // [who, welld, horly]
  let split = input.split(" ");
  let first = [];
  let last = [];

  // Populate arrays
  // [who, welld, horly]
  // [w, w, h]
  // [o, d, y]
  for (let i = 0; i < split.length; i++) {
    first.push(split[i][0]);
    last.push(split[i][split[i].length - 1]);
  }

  // Transform
  // [w, w, h] --> [w, h, w]
  let firstOfFirst = first.shift();
  first.push(firstOfFirst);

  // [o, d, y] --> [y, o, d]
  let lastOfLast = last.pop();
  last.unshift(lastOfLast);

  // Modify array
  let result = [];
  for (let i = 0; i < split.length; i++) {
    let word = first[i] + split[i].slice(1, -1) + last[i];
    result.push(word);
  }
  return result.join(" ");
};

console.log(cycle("who welld horly"));
console.log(cycle("bes le uoogit"));
