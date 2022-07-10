function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let A = new TreeNode(106);
let C = new TreeNode(100);
let D = new TreeNode(1);
let E = new TreeNode(1);
let F = new TreeNode(208);

A.right = C;
C.left = D;
C.right = E;
E.left = F;

function sumUptoNode(node) {
  if (node === null) {
    return 0;
  }

  return node.data + sumUptoNode(node.left) + sumUptoNode(node.right);
}

let ans = false;

/*function checkIfPossible(node, totalSumOfTree) {
  console.log("first");
  let left;
  let right;

  if (node.left) left = node.left;

  if (node.right) right = node.right;

  if (node.left) {
    console.log("checking in right");
    node.left = null;
    console.log(sumUptoNode(left), "::", sumUptoNode(node));
    if (2 * sumUptoNode(left) === totalSumOfTree) {
      ans = true;
    }

    node.left = left;
  }

  if (node.right) {
    console.log("checking in right");
    node.right = null;
    console.log(sumUptoNode(node), "::", sumUptoNode(right));
    if (sumUptoNode(node) === sumUptoNode(right)) {
      ans = true;
    }
    node.right = right;
  }

  if (ans) return;
  else {
    if (node.left) checkIfPossible(node.left);

    if (node.right) checkIfPossible(node.right);
  }
}
*/
function checkIfPossible2(node, totalSumOfTree) {
  if (node.left) {
    console.log("on left", sumUptoNode(node.left), totalSumOfTree);
    if (sumUptoNode(node.left) * 2 === totalSumOfTree) {
      ans = true;
      return;
    } else checkIfPossible2(node.left, totalSumOfTree);
  }

  if (node.right) {
    console.log("on right", sumUptoNode(node.right), totalSumOfTree);
    if (sumUptoNode(node.right) * 2 === totalSumOfTree) {
      ans = true;
      return;
    } else {
      checkIfPossible2(node.right, totalSumOfTree);
    }
  }
}

let totalSumOfTree = sumUptoNode(A);
console.log(totalSumOfTree);
checkIfPossible2(A, totalSumOfTree);

console.log(ans);
