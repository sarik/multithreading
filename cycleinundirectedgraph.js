let A = 7;
let B = [
  [1, 2],
  [2, 3],
  [3, 1],
  [2, 4],
  [2, 5],
  [2, 7],
  [4, 6],
  [5, 6],
];

A = 4;
B = [
  [1, 2],
  [2, 3],
  [3, 4],
];

let adjMat = new Array(A + 1);
let visited = new Array(A + 1).fill(false);

for (let i = 0; i < adjMat.length; i++) {
  adjMat[i] = [];
}

for (let i = 0; i < B.length; i++) {
  let [to, from] = B[i];
  adjMat[to].push(from);
  adjMat[from].push(to);
}

console.log(adjMat);

function checkCycle(node, pnode, visited, adjMat) {
  console.log(node, pnode);
  //if (visited[node]) return false;

  for (let i = 0; i < adjMat[node].length; i++) {
    let neighbour = adjMat[node][i];

    if (pnode !== neighbour) console.log(node, neighbour, "check");
    if (pnode === neighbour) continue;
    else if (visited[neighbour]) return true;
    visited[neighbour] = true;
    if (checkCycle(neighbour, node, visited, adjMat)) return true;
  }

  return false;
}

for (let i = 1; i <= A; i++) {
  if (!visited[i]) {
    if (checkCycle(i, i, visited, adjMat)) {
      console.log("cycle found");
    }
  }
}
console.log("cycle not found");
