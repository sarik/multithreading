let A = [1, 2, 3, 4, 5]
let B = 10
let left = 0

let right = A.length

function check(A, B, mid) {

    let sum = 0

    for (let i = 0; i < mid; i++) {
        sum += A[i]
    }


    if (sum > B) return false

    for (let i = mid; i < A.length; i++) {
        sum += A[i]
        sum -= A[i - mid]


        if (sum > B)
            return false
    }


    return true
}

let ans = 0

while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (check(A, B, mid)) {
        ans = mid
        left = mid + 1
    }
    else
        right = mid - 1
}

console.log(ans)