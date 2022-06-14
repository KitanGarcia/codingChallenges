const removeVertex = (adjList, vertex) => {
  if (!adjList[vertex]) {
    return;
  }

  let connectionsToRemove = adjList[vertex];
  delete adjList[vertex];

  // Find connections
  connectionsToRemove.forEach((connection) => {
    for (let i = 0; i < adjList[connection]; i++) {
      // Remove vertex to be deleted from each connection
      if (adjList[connection] === vertex) {
        adjList.splice(i, 1);
      }
    }
  });
};
