function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let A = new TreeNode(10);
let B = new TreeNode(4);
let C = new TreeNode(2);
let D = new TreeNode(2);
let E = new TreeNode(2);

A.left = B;
A.right = C;
B.left = D;
B.right = E;

function isSumBinaryTree(node) {
  if (node.left == null && node.right == null) return [true, node.data];
  //if (node === null) return [true, 0]
  if (node.left == null)
    return [node.data === node.right.data, node.right.data * 2];
  if (node.right == null)
    return [node.data === node.left.data, node.left.data * 2];

  let [isSumLeft, sumLeft] = isSumBinaryTree(node.left);
  let [isSumRight, sumRight] = isSumBinaryTree(node.right);

  if (isSumLeft && isSumRight) {
    if (node.data === sumLeft + sumRight) {
      return [true, node.data * 2];
    } else return [false, 0];
  } else return [false, 0];
}

console.log(isSumBinaryTree(A)[0]);
