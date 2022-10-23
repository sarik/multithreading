function largestArea(A) {

    if (A.length === 1) return A[0]

    //find smaller  on left
    //find smaller on right 
    //take min of two
    //area on left = (current index - index on left)*min of two smallers

    let stack = []
    let leftSmaller = new Array(A.length).fill(-1)
    let rightSmaller = new Array(A.length).fill(A.length)

    for (let i = 0; i < A.length; i++) {
        while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
            stack.pop()
        }
        if (stack.length > 0) leftSmaller[i] = stack[stack.length - 1]

        stack.push(i)
    }
    stack = []
    for (let i = A.length - 1; i >= 0; i--) {
        while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
            stack.pop()
        }
        if (stack.length > 0) rightSmaller[i] = stack[stack.length - 1]

        stack.push(i)
    }

    let maxArea = 0

    for (let i = 0; i < A.length; i++) {
        let leftArea = 0
        let rightArea = 0
        //if (leftSmaller[i] !== -1) {
        leftArea = (i - leftSmaller[i] - 1) * A[i]
        //}
        //if (rightSmaller[i] !== A.length) {
        rightArea = (rightSmaller[i] - i - 1) * A[i]
        //}

        let totalArea = leftArea + rightArea + A[i]

        maxArea = Math.max(maxArea, totalArea)


    }

    return maxArea

}

let A = [2, 1, 5, 6, 2, 3]

console.log(largestArea(A))