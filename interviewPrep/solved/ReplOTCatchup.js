/*
 *For this challenge, you're going to write the OT validation function. The function will take in a string for the stale file contents, a string containing the latest file contents, and a JSON string containing the operations. Your function should validate that the sequence of operations, when applied to the stale contents, produces the latest contents. If it does not, or if the sequence of operations is invalid, your function should return false.

You can't skip past the end of a string
You can't delete past the end of a string
Delete operations are applied forward while keeping the cursor in place
*/

function isValid(stale, latest, otjson) {
  let transformed = stale;
  let position = 0;
  let parsedJSON = JSON.parse(otjson);

  for (let ot of parsedJSON) {
    if (ot.op === "skip") {
      if (position + ot.count >= transformed.length) {
        return false;
      }
      position += ot.count;
    } else if (ot.op === "insert") {
      let firstSlice = transformed.slice(0, position);
      let secondSlice = transformed.slice(position);

      transformed = firstSlice + ot.chars + secondSlice;
      position += ot.chars.length;
    } else if (ot.op === "delete") {
      if (ot.count + position >= transformed.length) {
        return false;
      }

      // Check if the indices are right for count
      let firstSlice = transformed.slice(0, position);
      let secondSlice = transformed.slice(position + ot.count);
      transformed = firstSlice + secondSlice;
    }
  }

  return transformed === latest ? true : false;
}

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "Repl.it uses operational transformations.",
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  )
); // true

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "Repl.it uses operational transformations.",
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  )
); // false, delete past end

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "Repl.it uses operational transformations.",
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
  )
); // false, skip past end

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "We use operational transformations to keep everyone in a multiplayer repl in sync.",
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )
); // true

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "We can use operational transformations to keep everyone in a multiplayer repl in sync.",
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )
); // false

console.log(
  isValid(
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
    "[]"
  )
); // true
