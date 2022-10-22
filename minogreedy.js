let A = "00010110"
let B = 3
let i = 0

A = A.split("")

let ans = 0
while (i < A.length) {

    console.log(i, A[i])

    while (A[i] == 1) {
        i++
    }
    console.log(i, "after")

    //encountered 0
    if (i + B - 1 < A.length) {
        let nextZero = i + B
        console.log(i, i + B - 1)
        for (let j = i; j < i + B; j++) {
            A[j] = A[j] == 1 ? 0 : 1
            if (A[j] == 0) {
                if (nextZero == i + B)
                    nextZero = j
            }

        }
        i = nextZero
        console.log(nextZero, "nextzero")
        ans++

    }
    else {
        console.log("breaking")
        break
        //return -1
    }

}

console.log("ans", ans)