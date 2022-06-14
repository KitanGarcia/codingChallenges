function EquivalentKeypresses(strArr) {
  let str1 = strArr[0].split(",");
  let str2 = strArr[1].split(",");

  let result1 = [];
  let result2 = [];

  str1.forEach((keypress) => {
    if (keypress === "-B") {
      result1.pop();
    } else {
      result1.push(keypress);
    }
  });
  str2.forEach((keypress) => {
    if (keypress === "-B") {
      result2.pop();
    } else {
      result2.push(keypress);
    }
  });

  if (result1.join("") == result2.join("")) {
    return true;
  }

  return false;
}

console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,d,-B"]));
