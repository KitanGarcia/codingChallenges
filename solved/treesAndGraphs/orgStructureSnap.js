// Employee ID, Manager ID, Employee Name
// 1, 1, Bob
// 2, 1, Alice
// 3, 2, Emp3
// 4, 3, Emp4
// 5, 4, Emp5
// 6, 3, Emp6
// 7, 1, Emp7

// Bob
//   Alice
//     Emp3
//       Emp4
//         Emp5
//       Emp6
//   Emp7

// [[1, 1, "bob"], [...], ... ]

/*
starting point: person with same employee ID and managerID

build adjacency list {}
ManagersID: [subordinatesIDs]
bob: Alice, Employee7
Alice: [employee 3]
...

after we build the list out
*/


let test1 = [[1, 1, 'bob'], [2, 1, 'Alice'], [3, 2, 'Emp3'], [4, 3, 'Emp4'], [5, 4, 'Emp5'], [6, 3, 'Emp6'], [7, 1, 'Emp7']]
let test2 = [[4, 4, 'bob'], [2, 3, 'Alice'], [3, 4, 'Emp3'], [6, 3, 'Emp4'], [5, 4, 'Emp5'], [1, 3, 'Emp6'], [7, 5, 'Emp7']]


function organize(matrix) {
  //check that it's not empty
  if (matrix.length === 0) {
    return;
  }

  //check that it's a nonempty 2D array 
  if (!Array.isArray(matrix[0]) || matrix[0].length === 0) {
    return
  }

  let adjList = {}; //graph containing manager: [employees]
  let idToName = {}; //mapping of IDs to names for displaying in DFS
  let start = 0; //starting node of dfs

  for (let i = 0; i < matrix.length; i++) {

    //find 1st 2 elements of each nested array and put them in our adjacency list
    let empID = matrix[i][0];
    let managerID = matrix[i][1];
    let empName = matrix[i][2];
    idToName[empID] = empName;

    //if employee ID and manager ID are the same, that person is the highest in the org chart
    //and our starting point
    if (empID === managerID) {
      start = empID;
    }

    //if managerID is already in table, just push employee ID
    if (adjList[managerID]) {
      adjList[managerID].push(empID);
    }

    //if managerID is not yet in our hash table
    else {
      adjList[managerID] = [];
      adjList[managerID].push(empID);
    }
  }
   
  //start at the employee ID who has itself as the manager
  dfs(adjList, idToName, start);
}



function dfs(graph, idToName, start) {
  let visited = new Set();
  let height = 0;

  let mapping = idToName;


  function traverse(current, height) {
    if (visited.has(current)) {
      return;
    }

    visited.add(current);

    height++;
    let spaces = "  ".repeat(height);
    let name = idToName[current];

    console.log(spaces + name);

    let edges = graph[current];
    if (edges) {
      for (let edge of edges) {
        traverse(edge, height);
      }
    }
  }
  traverse(start, height);
}


organize(test1);
console.log("---------------------------");
organize(test2);
