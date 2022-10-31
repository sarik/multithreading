let root = new TreeNode(A[0])

let i = 1

//  let curr = root

let queue = [root]

while (queue.length !== 0) {
    let curr = queue[0]
    queue = queue.slice(1)
    if (curr === null) continue

    let val_left = A[i]
    let val_right = A[i + 1]
    i += 2



    if (val_left === -1) {
        curr.left = null

    }
    else {
        curr.left = new TreeNode(val_left)
    }

    if (val_right === -1) {
        curr.right = null

    }
    else {
        curr.right = new TreeNode(val_right)
    }

    queue.push(curr.left)
    queue.push(curr.right)
}


return root