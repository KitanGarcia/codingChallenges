function PrimeTime(num) {
  let i = 2;
  while (i <= Math.floor(num / 2)) {
    let rem = num % i;
    if (rem !== 0) {
      i++;
    } else {
      return "false";
    }
  }
  return "true";
}

/*
function PrimeTime(num) {
  // Check for 2
  if (num === 2) {
    return "true";
  }

  // Check for evens
  if (num % 2 === 0) {
    return "false";
  }

  // Take ceiling of square root
  //let ceiling = Math.ceil(Math.sqrt(num));
  let ceiling = Math.floor(num / 2);

  while (ceiling > 1) {
    let decrement = ceiling;
    if (decrement * ceiling === num) {
      return "false";
    }

    while (decrement > 1) {
      if (decrement * ceiling === num) {
        return "false";
      }
      decrement--;
      if (decrement * ceiling < num) {
        break;
      }
    }
    ceiling--;
  }

  return "true";
}
*/

console.log(PrimeTime(7));
console.log(PrimeTime(9));
console.log(PrimeTime(11));
console.log(PrimeTime(19));
console.log(PrimeTime(27));
console.log(PrimeTime(39));
console.log(PrimeTime(41));
console.log(PrimeTime(101));
