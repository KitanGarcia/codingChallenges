/*
 * Given a dictionary of number to character array, return the possible results
 *
    print("Hello")
    DIALER_DICT = {
        '1': ['a', 'b'],
        '2': ['c', 'd'],
    }
    get_words('') => ['']
    get_words('1') => ['a', 'b'] 
    get_words('2') => ['c', 'd'] 
    get_words('12') => ['ac', 'ad', 'bc', 'bd']


    get_words('221') => ['cca', 'ccb', 'cda', 'cdb', 'dca', 'dcb', 'dda', 'ddb']
    pick from 2, pick from 2, pick from 1
 */

function dialerDictionary(numbers) {
  const map = {"1": ["a", "b"], "2": ["c", "d"], "4": ["z", "s"]};

  let result = [];
  function recurse(string, index) {
    if (string.length >= numbers.length || index === numbers.length) {
      result.push(string);
      return;
    }


    //choose to pick one and increment index or pick the next and increment index
    for (let i = 0; i < map[numbers[index]].length; i++) {
      recurse(string + map[numbers[index]][i], index + 1);
    }


  }

  recurse("", 0);
  return result;
}

console.log(dialerDictionary("221"));
console.log(dialerDictionary("2214"));
