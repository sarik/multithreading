function isSymmetric(A) {

    function isSym(node1, node2) {

        if (node1 === null && node2 === null) return true

        if (node1 === null) return false
        if (node2 === null) return false

        if (node1.data === node2.data)
            return isSym(node1.left, node2.right) && isSym(node1.right, node2.left)
        else return false




    }

}

function isMirror(node) {
    if (node === null) return true

    if (node.left === null && node.right === null) return true

    if (node.left === null || node.right === null) return false

    if (node.left !== null && node.right !== null) {
        if (node.left.data === node.right.data)
            return isMirror(node.left) && isMirror(node.right)
        else return false
    }

}

function TreeNode(data) {
    this.data = data
    this.left = null
    this.right = null
}


let A = new TreeNode(20);
let B = new TreeNode(-10);
let C = new TreeNode(20);
let D = new TreeNode(4);
let E = new TreeNode(5);
let F = new TreeNode(-10);
let G = new TreeNode(-50);