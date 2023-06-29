/*
  Given a list of blackout ranges for the month, return a 2D array of available dates. Assume that a month starts on day 1 and ends on day 30

  input: [[7, 7], [2, 5], [15, 23]]
  output: [[1]. [6], [8, 14], [24, 30]]

  By asking questions, we find that:
  Blackout ranges can overlap
  They don't have to start at the beginning or end of the month
  They do not need to be in a sorted order

  We can sort and assume we just have it sorted, unless we can come up with good way to sort it

*/

const calendarBlackouts = (blackouts) => {
  // Populate set with all days of the month
  let validDays = new Set();
  // O(30)
  for (let i = 1; i <= 30; i++) {
    validDays.add(i);
  }

  let result = [];

  // Remove days
  // O(n)
  for (let i = 0; i < blackouts.length; i++) {
    let blackoutStart = blackouts[i][0];
    let blackoutEnd = blackouts[i][1];

    // O(30)
    for (let j = blackoutStart; j <= blackoutEnd; j++) {
      validDays.delete(j);
    }
  }

  let validDaysArray = Array.from(validDays);
  let left = 0;
  let right = 1;
  let isLowest = true;
  let tuple = [];

  // FIX THIS BAD CODE!!!!
  // NEEDS A REWRITE
  while (right < validDaysArray.length) {
    if (validDaysArray[left] === validDaysArray[right] - 1) {
      if (isLowest) {
        tuple.push(validDaysArray[left]);
        isLowest = false;
      }
      left++;
      right++;

      // End of array is reached while in a valid stretch
      if (right === validDaysArray.length) {
        tuple.push(validDaysArray[right]);
      }
    } else {
      // They are one away
      if (left + 1 === right) {
        console.log("triggered left", left);
        tuple.push(validDaysArray[left]);
        left++;
        right = left + 1;
      }
      // The previous stretch is broken
      else {
        tuple.push(validDaysArray[right]);
        left = right;
        right++;
        isLowest = true;
        console.log("broken left", left);
        console.log("broken right", right);
      }
      result.push(tuple);
      tuple = [];
    }
  }

  console.log(validDaysArray);
  return result;
};

const input1 = [
  [7, 7],
  [2, 5],
  [15, 23],
];
console.log(calendarBlackouts(input1));
