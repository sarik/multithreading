let A = 5
let B = [
    [1, 3],
    [1, 4],
    [3, 2],
    [3, 5],
]

A = 15
B =
    [
        [7, 5],
        [15, 14],
        [11, 2],
        [8, 7],
        [10, 3],
        [5, 3],
        [4, 2],
        [6, 4],
        [13, 2],
        [3, 2],
        [14, 11],
        [12, 9],
        [2, 1],
        [9, 2],
    ]

let visited = new Array(A + 1).fill(false)

/* let adjList = new Array(A + 1)

for (let i = 0; i < adjList.length; i++) {
    adjList[i] = new Array()
} */


const maxN = 1e5 + 5;
let col = new Array(2);
let adjList = new Array(maxN).fill([]);

for (let i = 0; i <= A; i++) {
    adjList[i] = [];
}

//let adjList = new Array(A + 1).fill([]);
for (let i = 0; i < B.length; i++) {
    let u = B[i][0],
        v = B[i][1];
    adjList[u].push(v);
    adjList[v].push(u);
}


console.log("adjList")
console.log(adjList)

let totalNodesAtLevel = [0, 0]


function dfs_old(node, parent, currLevel, totalNodesAtLevel, visited) {
    //visited[node] = true
    totalNodesAtLevel[currLevel]++

    for (let i = 0; i < adjList[node].length; i++) {
        let child = adjList[node][i]

        if (child === parent) continue
        else
        //if (!visited[child])
        {

            dfs(child, node, 1 - currLevel, totalNodesAtLevel, visited)
        }
    }

}

function dfs(u, pnode, c, totalNodesAtLevel, visited) {
    totalNodesAtLevel[c]++;
    // for(auto v: g[u]){
    for (let i = 0; i < adjList[u].length; i++) {
        let v = adjList[u][i];
        if (v != pnode) {//p node is parent node
            dfs(v, u, 1 - c, totalNodesAtLevel, visited);
        }
    }
}

dfs(1, 0, 0, totalNodesAtLevel, visited)

console.log(totalNodesAtLevel)

let totalPossibleEges = totalNodesAtLevel[0] * totalNodesAtLevel[1]

console.log(totalPossibleEges - (A - 1))