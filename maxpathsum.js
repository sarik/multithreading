function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let A = new TreeNode(20);
let B = new TreeNode(-10);
let C = new TreeNode(20);
let D = new TreeNode(4);
let E = new TreeNode(5);
let F = new TreeNode(-10);
let G = new TreeNode(-50);

A.left = B;
A.right = C;
//B.left = D;
//B.right = E;
C.left = F;
C.right = G;

let ans = 0;

function maxPathSum(node) {
  if (node === null) return 0;

  let leftMaxPath = Math.max(maxPathSum(node.left), 0);
  let rightMaxpath = Math.max(maxPathSum(node.right), 0);

  ans = Math.max(ans, Math.max(node.data + leftMaxPath + rightMaxpath));

  return node.data + Math.max(leftMaxPath, rightMaxpath, 0);
}

maxPathSum(A);

console.log(ans);
