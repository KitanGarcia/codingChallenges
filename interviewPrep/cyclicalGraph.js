/*
 * Given a graph,determine if it has a cycle
*/

function isCyclicalGraph(edges) {
  let numVertices = edges.length;

  let visited = new Array(numVertices).fill(false);
  let ancestors = new Array(numVertices).fill(false); //stack

  for (let i = 0; i < numVertices; i++) {
    if (visited[vertex]) {
      continue;
    }

    if (dfs(vertex, edges, visited, ancestors)) {
      return true;
    }
  }
  return false;
}

function dfs(vertex, edges, visited, ancestors) {
  visited[vertex] = true;
  ancestors[vertex] = true;

  let neighbors = edges[vertex];
  //DOUBLE CHECK IN OR OF
  for (let neighbor in neighbors) {
    if (!visited[neighbor]) {
      if (dfs(neighbor, edges, visited, ancestors)) {
        return true;
      }
    }
    else if (ancestors[neighbor]) {
      return true;
    }
    ancestors[neighbor] = false;
  }
  return false;

}

let edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
console.log(isCyclicalGraph(edges));

