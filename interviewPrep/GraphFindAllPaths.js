/*
 * Given a starting vertex and a string destination, return all valid paths for a given source and destination
 *
 * Input:
 * origin - the starting vertex
 * destination - integer value of destination vertex
 *
 * output:
 * result - sorted string array of all paths from origin to destination
 *
 * INPUT: 
              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

Origin: (A)

Destination: D

OUTPUT: 

["ABCEFD", "ABCEGFD", "ABHEFD", "ABHEGFD"]

EXPLANATION: 

There are four paths from vertex A to vertex D. These four paths are listed above and then sorted within their array. 
 *
 */
