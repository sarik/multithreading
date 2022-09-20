function check(mid, A, B) {

    let cowsAssigned = 1

    let lastAssignment = A[0]
    let i = 1

    while (i < A.length) {
        if (A[i] - lastAssignment >= mid) {
            lastAssignment = A[i]
            cowsAssigned++
            if (cowsAssigned === B) return true
        }
        i++

    }

    return false
}

let A = [5, 17, 100, 11]
let B = 2

A = A.sort((a, b) => a - b)
let minDistance = 1
let maxDistance = A[A.length - 1] - A[0]

let left = minDistance

let right = maxDistance

let ans = Number.MIN_VALUE

while (left <= right) {


    let mid = Math.floor((left + right) / 2)
    console.log(left, right, mid)

    if (check(mid, A, B)) {
        ans = Math.max(ans, mid)
        left = mid + 1
    }
    else {
        right = mid - 1
    }
}

//if(ans === Number.MIN_VALUE) return 
console.log(ans)
