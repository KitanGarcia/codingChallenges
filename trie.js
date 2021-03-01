class TrieNode {
  constructor(val) {
    this.value = val;  //the character the node is storing
    this.isWord = false; //indicates if the node is the end of a word
    this.descendants = {}; //keys are characters. values are keys of trienodes
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word) {
    let current = this.root;
    let index = 0;

    while (index < word.length) {
      let letter = word[index];

      //check if letter in word to be added is already in the trie
      if (letter in current.descendants) {
        current = current.descendants[letter];
      }

      //if the letter is not in the trie, make a new node and new entry in the descendants table with that node
      else {
        let newNode = new TrieNode(letter);
        current.descendants[letter] = newNode;
        current = newNode;
      }
      index++;
    }
    current.isWord = true;
  }


  isWord(string) {
    let current = this.root;
    let index = 0;

    while (index < string.length) {
      let letter = string[index];

      //if the letter in string is not in the trie
      if (!(letter in current.descendants)) {
        return false;
      }

      //if letter is in trie, move current index along
      else {
        current = current.descendants[letter];
      }
      index++;
    }
    return current.isWord;
  }

  //this just returns true if the string is a prefix to other prefixes or words
  //alternatively, we could try to make it return all words beginning with this prefix
  startsWith(string) {
    let current = this.root;
    let index = 0;

    while (index < string.length) {
      let letter = string[index];

      //if the letter in the string is not in the trie
      if (!(letter in current.descendants)) {
        return false;
      }

      //return words that begin with string
      else {
        current = current.descendants[letter];
      }
      index++;
    }
    return true;
  }

}

let trie = new Trie();
trie.insert("cow");

console.log(trie.root.descendants);
