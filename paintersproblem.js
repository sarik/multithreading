let A = 10
let B = 1
let C = [1, 8, 11, 3]
C = C.map(val => val * B)


let left = Number.MIN_VALUE
let right = 0

for (let i = 0; i < C.length; i++) {
    left = Math.max(left, C[i])
    right += C[i]
}

let ans = Number.MAX_VALUE

while (left <= right) {

    let mid = Math.floor((left + right) / 2)

    if (checkNew(mid, A, C)) {
        ans = Math.min(ans, mid)
        right = mid - 1
    }
    else
        left = mid + 1

}

function checkNew(mid, A, C) {
    //no of stalls - n
    let n = C.length

    let current_work = C[0]
    let workers = 1

    for (let i = 1; i < n; i++) {
        current_work = C[i] + current_work

        if (current_work > mid) {
            workers++
            current_work = C[i]
        }
    }

    if (workers <= A) return true
    else return false
}


//check if A painters can finish C boards in less than mid time
function check(mid, A, C) {
    let totalPainters = 1
    let currentTime = 0

    for (let i = 0; i < C.length; i++) {
        currentTime += B * C[i]

        //Goes to new painter
        if (currentTime > mid) {
            totalPainters++
            if (totalPainters > A)
                return false
            currentTime = B * C[i]
        }

    }

    if (totalPainters > A) return false
    return true


}

console.log(ans % 10000003)