let A = [3, 1, 2, 2, 1]
let B = 3

function check(A, i, count, prefixsum, B) {

    let operations = (count * A[i]) - (prefixsum[i + 1] - prefixsum[i - count + 1])

    return operations <= B ? true : false

}

A = A.sort((a, b) => a - b)

let prefixsum = [0]

let ans = [-1, -1]
let max

for (let i = 0; i < A.length; i++) {
    prefixsum.push(prefixsum[i] + A[i])

}

console.log(prefixsum)
for (let i = 0; i < A.length; i++) {
    let low = 1
    let high = i + 1

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)

        if (check(A, i, mid, prefixsum, B)) {
            max = mid
            low = mid + 1
            
        }
        else
            high = mid - 1
    }

    if (ans[0] < max) {
        ans[0] = max
        ans[1] = A[i]
    }

}

console.log(ans)