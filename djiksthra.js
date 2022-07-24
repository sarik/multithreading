class PriorityQueue {
  constructor() {
    this.heap = [];
    // this.fct = fct;
  }
  top() {
    if (this.heap.length == 0) return undefined;
    return this.heap[0];
  }

  //node looks like [node,distance]
  push(node) {
    //put new element at last,keep going up till its parent is bigger than curr elemebt
    this.heap.push(node);
    let id = this.heap.length - 1;
    let par = Math.floor((id - 1) / 2);

    //keep going up till its parent is bigger than curr elemebt
    while (id > 0 && this.heap[id][1] < this.heap[par][1]) {
      [this.heap[id], this.heap[par]] = [this.heap[par], this.heap[id]];
      id = Math.floor((id - 1) / 2);
      par = Math.floor((id - 1) / 2);
    }
  }
  pop() {
    let ret = this.heap[0];
    //swap root with last element and pop last element.Removal from heap
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.recurDown(0);
    return ret;
  }
  recurDown(node) {
    let l = node * 2 + 1;
    let r = node * 2 + 2;

    let cur = node;
    if (l < this.heap.length && this.heap[cur][1] > this.heap[l][1]) cur = l;
    if (r < this.heap.length && this.heap[cur][1] > this.heap[r][1]) cur = r;
    //if left and right exists and they are less than curr,curr becomes left or right
    //if curr doesnt become left or right,stop going down
    if (cur != node) {
      [this.heap[node], this.heap[cur]] = [this.heap[cur], this.heap[node]];
      this.recurDown(cur);
    }
  }
  size() {
    return this.heap.length;
  }
  empty() {
    return this.heap.length == 0;
  }
}
let A = 7;
let B = [
  [2, 4, 10],
  [3, 4, 1],
  [3, 6, 1],
  [1, 2, 4],
  [4, 5, 6],
];
let C = 2;
//adj list is of neighbours with their wts
let adjList = new Array(A);
//distance matrix from source
let distance = new Array(A).fill(Number.MAX_VALUE);

distance[C] = 0;
for (let i = 0; i < A; i++) {
  adjList[i] = [];
}

for (let i = 0; i < B.length; i++) {
  let [node1, node2, wt] = B[i];
  adjList[node1].push([node2, wt]);
  adjList[node2].push([node1, wt]);
}

let pq = new PriorityQueue();

/* for (let i = 0; i < adjList[C].length; i++) {
            pq.push(adjList[C][i])
        } */
pq.push([C, 0]);

while (!pq.empty()) {
  let [nodepopped, wtToNode] = pq.pop();

  if (distance[nodepopped] < wtToNode) continue;

  for (let i = 0; i < adjList[nodepopped].length; i++) {
    let [neighbour, neighbourwt] = adjList[nodepopped][i];

    if (distance[neighbour] > wtToNode + neighbourwt) {
      distance[neighbour] = wtToNode + neighbourwt;
      pq.push([neighbour, wtToNode + neighbourwt]);
    }
  }
}

for (let i = 0; i < A; i++) {
  if (distance[i] === Number.MAX_VALUE) {
    distance[i] = -1;
  }
}

console.log(distance);

return distance;
