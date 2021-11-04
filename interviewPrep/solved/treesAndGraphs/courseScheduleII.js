/*
There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
  

Input: numCourses = 1, prerequisites = []
Output: [0]
  
 */









var findOrder = function(numCourses, prerequisites) {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    console.log(v);
    inDegrees[v]++;
  }
  console.log(inDegrees);
  
  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) {
      queue.push(i);
    }
  }
  
  //queue has 0
  
  const result = [];
  while (queue.length) {
    const u0 = queue.shift();
    numCourses--;
    result.push(u0);
    
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) {
          queue.push(v);
        }
      }
    }
  }
  return numCourses === 0 ? result : [];
  /*
  let visited = new Set();
  let results = [];
  let hash = {};
  
  //set up hash table to have source: dest
  for (let i = 0; i < prerequisites.length; i++) {
   if (hash.hasOwnProperty(prerequisites[i][1])) {
      hash[prerequisites[i][1]].push(prerequisites[i][0]);
    }
    else {
      hash[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  console.log(hash);
    
  //now we topological sort
  
  function dfs(curr) {
    let current = hash[curr];
    if (visited.has(current)) {
      return;
    }
    visited.add(current);
    if (Object.values(current)) {
      let neighbors = Object.values(current);
      for (let i = 0; i < neighbors.length; i++) {
        console.log(neighbors[i]);
      } 
    }
    results.push(curr);
  }
  
  let vertices = Object.keys(hash); //gives us vertices, ie. 0, 1, 2 (but the 3 is missing)
  for (let i = 0; i < vertices.length; i++) {
    // console.log(hash[vertices[i]]);
    dfs(vertices[i]);
  }
  return results.reverse();
  */
  

};
