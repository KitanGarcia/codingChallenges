/*
 * Implement BFS using a queue and a while loop
 * Input: Vertex - the starting vertex (will always start at vertex A)
 *
 * Vertices have the following properties:
 * id - data stored in the vertex
 * edges - list of vertices connected to the vertex
 * 
 * output: a string with the ids arranged in a breadth first manner
 *
 *INPUT: 
              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

OUTPUT: 

"ABCHEFGD"


This order is one of the possible breadth-first paths. "ABHCEFGD" is also a valid breadth-first traversal, but be aware this will not match with the test expectation. To handle for this, make sure you work with the edges for a node in the order they appear in the node's edge list.
 *
 */
