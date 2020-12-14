
# ^ start
# $ end
# . any char except newline
# | or
# ? 0 or 1
# * 0 or more
# 1 or more
# [] a char class ie. [0-9]
# () enclose a group
# {} number of occurrences
# ------------------------------------------------------
#  \d [0-9]
#  \D any non digit character
#  \s any whitespace
#  \S any nonwhitespace
#  \w [a-z 0-9 A-Z]
#  \W any nonalphanumeric char
#




#



#*
#* Validate if a given string can be interpreted as a decimal number
#*
#0" => true
# 0.1 " => true
#abc" => false
#1 a" => false
#2e10" => true
# -90e3   " => true
# 1e" => false
#e3" => false
# 6e-1" => true
# 99e2.5 " => false
#53.5e93" => true
# --6 " => false
#-+3" => false
#95a54e53" => false

 # A list of characters that can be in a valid decimal number:
 # Numbers 0-9
 # Exponent- "e"
 # Positive/negative sign - "+"/"-"
 # Decimal point - "."
 #
 #
 #
 #
 #        true
 #        0                                [0]
 #        <space>0.1<space>                \s*[0-9]+\.[0-9]+\s*      any number of whitespace; int, ., int
 #        2e10                             [0-9]+e[0-9]+ or \d+e\d
 #        -90e3
 #        1e3
 #        6e-1
 #        53.5e93                          (\d+\.?\d*)
 #        .53e93                           
 #        .5
 #        5.
 #        -.3
 #
 #
 #
 #        false
 #        abc
 #        1 a
 #        1e
 #        e3
 #        --6
 #        -+3
 #        95a54e53
 #        99e2.5 ----> 99e2 works
 #
 #/

import re

#This works in python, but easily in JS since JS doesn't have fullmatch()

pattern = "\s*([+-]?((\d+\.)|(\d+\.\d+)|(\.\d+)|\d+)(e[+-]?\d+)?)\s*"; #any number whitespace on either side 0 or 1 +-. Then can have one e with 1 +- and an int

print(re.fullmatch(pattern, "99e22"))
print(re.fullmatch(pattern, "e"))
print(re.fullmatch(pattern, "99e2.5"))
