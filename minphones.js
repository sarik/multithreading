let A = [23, 36, 58, 59]
let B = [3, 207, 62, 654, 939, 680, 760]
function binarySearch(A, val) {

    let l = 0
    let r = A.length - 1

    while (l <= r) {

        let mid = Math.floor((l + r) / 2)

        if (A[mid] === val) {
            return mid
        }
        else if (A[mid] > val) {
            r = mid - 1
        }
        else if (A[mid] < val) {
            l = mid + 1
        }
    }

    return l
}

let prefix_sum = [A[0]]

for (let i = 1; i < A.length; i++) {
    prefix_sum.push(prefix_sum[i - 1] + A[i])
}

console.log(prefix_sum)
let ans = []

for (let i = 0; i < B.length; i++) {
    let currIndex = binarySearch(prefix_sum, B[i])
    console.log(binarySearch(prefix_sum, 62))
    ans.push(currIndex)


}

console.log(ans)