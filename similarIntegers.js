# Question 1: Given a sorted arr of integers, return the groups of similar numbers 
# where in each group the difference between numbers is 1 or 0 (equal)

# Assumptions:
# No negative numbers

# given a list of integers (sorted) =>. [1, 2, 3, 7,8,9,10] => [(1,3),(7,10)]                                           s      i
numbers =  [1, 2, 3,5,6,7,7,7,9,9,9,10,11]
# output = [(1,3)(5,7)(9,11)]

# if pre == cur: pass
#if pre+1 == cur: pass    sliding window: 
  
# Question 2: Given a dict, figure out all the combinations/all the keys according to given string input



"""
 Approach 1:
  DFS (Backtrack)// recursive
  TC -> O(N^M) where N is len of input word and M is the max len of dict values 
  SC -> O(M)
  
  
  221
    
                    "221"
         2      /           \  
              c                d
      2.    /    \           /   \
          cc    cd        dc      dd
   1     / \     / \    /  \     /  \
      cca  ccb cda cdb  dca dcb dda ddb
'''
# get_words('') => ['']
# get_words('1') => ['a', 'b'] 
# get_words('2') => ['c', 'd'] 

#get_words('12') => ['ac', 'ad', 'bc', 'bd']
# get_words('221') => ['cca', 'ccb', 'cda', 'cdb', 'dca', 'dcb', 'dda', 'ddb']

#input: "123"
 """
# Diction Length XXXX , Max char M
DIALER_DICT = {
    '1': ['a', 'b'],
    '2': ['c', 'd', 'z', 'k'],
    '3': ['e', 'f','s']
}

# word len: N, dict: longest values: M
word = "222" 

def get_words(word):
  result = []
  count = 0
  def traverse(word, l,acc_word):
    nonlocal count
    
    #base case
    if l == len(word):
      result.append(acc_word)
      return
    
    count += 1    
      
    letters = DIALER_DICT[word[l]]  #['a', 'b'] 
    
    for letter in letters: 
      #recursive
      #print(acc_word)
      traverse(word, l+1, acc_word+letter)
    
  traverse(word,0, "")
  print("count: ", count)
  return result

res = get_words(word)
print(res)
print(len(res))

  
  
  
  
  
