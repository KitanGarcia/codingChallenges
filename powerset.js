//for abc: yield ["", "a", "b", "c", "ab", "bc", "ac", "abc"]
//this is a combination NOT a permutation


/*
                                     ""
                        a             b              c
                    ab    ac      ab    ac        ac    bc
                  abc ab ac abc abc ab ac abc    abc
 *
 

binary switch
a b c
0 0 0
0 0 1
0 1 0
0 1 1
1 0 0
1 0 1
1 1 0
1 1 1

2^N combinations
*/




function powerset
