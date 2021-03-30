
// package whatever; // don't place package name!

import java.io.*;
import java.util.*;

class MyCode {
	public static void main (String[] args) {
		String[] words = {"cat", "cot", "dog", "horse", "tree", "catch"};
    
    String searchWord = "dog";
    buildTrie(words);
    
    System.out.println("Search word exists? " + isWord(searchWord));
    
    char[] board = {
          {'a', 'b', 'c', 'd', 'o'},
          {'o', 'r', 'a', 'i', 'g'},
          {'h', 's', 't', 'n', 'o'},
          {'p', 'e', 'r', 's', 't'}
        };
	}
  
  //same characters on the board cannot be shared with another word in the trie!!!
  public static List<String> trieWordsOnBoard(char[][] grid) {
    List<String> result = new ArrayList<>();
    int rows = grid.length;
    int cols = grid[0].length;
    
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        dfs(grid, i, j, result);
      }
    }    
    
    return result;
  }
  
  private void dfs(char[][] grid, int i, int j, List<String> result) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }
    
    for (int[] dir : directions) {
      dfs(grid, i + dir[0], j + dir[1], result);
    }
  }
  
  final int[][] directions = {{ 0, 1}, {1, 0}, {0, -1}, {-1, 0}};
  
  static class TrieNode {
    char value;
    Map<Character, TrieNode> children;
    boolean isWord;
    
    public TrieNode(char value) {
      this.value = value;
      this.children = new HashMap<>();
      this.isWord = false;
    }
  }
  
  static TrieNode root;
  
  public static void buildTrie(String[] words) {  
    root = new TrieNode('\u0000');  
    for (String word : words) {
      insert(word);
    }
  }  
  
  private static void insert(String word) {
    TrieNode curr = root;
    
    for (char c : word.toCharArray()) {
      if (curr.children.containsKey(c) == false) {
        TrieNode newNode = new TrieNode(c);
        curr.children.put(c, newNode);
      }
      
      curr = curr.children.get(c);
    }
    
    curr.isWord = true;
  }
  
  private static boolean isWord(String searchWord) {
    TrieNode curr = root;
    
    for (char c : searchWord.toCharArray()) {
      if (curr.children.containsKey(c) == false) return false;
      curr = curr.children.get(c);
    }
    
    return curr.isWord;
  }
}



//2n part

"""
Input: 2d array of letters
Output: list of all words in 2d array

No constraints!
"""

board = [
    ['a', 'b', 'c', 'd', 'o'],
    ['o', 'r', 'a', 'i', 'g'],
    ['h', 's', 't', 'n', 'o'],
    ['p', 'e', 'r', 's', 't']
]


// # TRIE
// #          ^
// #       /  |  \
// #      c   d   ...
// #    /  \  |
// #   o    a  o
// #   /    /  |
// #  t*    t*  g*
// #      /
// #     c
// #    /
// #   h*

// words = [
//     'cat',
//     'cot',    
//     'dog',
//     'horse',
//     'tree',
//     'catch'
// ]

// """
// Input: List of words
// Output: words represented as a trie 

// Trie
// add a word
// check if it is a word ==> is_word("cat") => True



