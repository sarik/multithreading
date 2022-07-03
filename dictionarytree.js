let A = ["hat", "cat", "rat"];
let B = ["cat", "ball"];
A = ["tape", "bcci"];
B = ["table", "cci"];
class Node {
  constructor(data) {
    this.data = data;
    this.children = Array(26).fill(null);
    this.isEnd = false;
  }
}

function insert(root, word) {
  let node = root;
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    let index = word[i].charCodeAt(0) - "a".charCodeAt(0);

    if (node.children[index] === null) {
      node.children[index] = new Node(word[i]);
    }
    node = node.children[index];
  }
  node.isEnd = true;
}

function check(root, word) {
  let node = root;
  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt(0) - "a".charCodeAt(0);

    if (node.children[index] === null) {
      //node.children[index] = new Node(word[i]);
      return false;
    }
    node = node.children[index];
  }
  return node.isEnd;
}

let root = new Node(null);

for (let i = 0; i < A.length; i++) {
  insert(root, A[i]);
}

let ans = [];

for (let i = 0; i < B.length; i++) {
  ans.push(check(root, B[i]) ? 1 : 0);
}

console.log(ans);
