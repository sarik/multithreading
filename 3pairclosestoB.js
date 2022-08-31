let A = [-1, 2, 1, -4]
let B = 1

A = [-5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3]
B = -1

A = [0, 8, -3, -1, 7, 9, -1, 8, -2, 2, -8, -6, -7, -4, -6, -1, -6, 6, 8, -10, -6, 4, -8, 7, 6, -4, -4, -10, -6, 5, -8, -1, 10, 6, 6, -3, -3, -7, -8, -7, 4, -7, 1, -10, 5]
B = 2
A = A.sort((a, b) => a - b)

let curr = 1000000000

console.log(A.length)
for (let i = 0; i < A.length - 2; i++) {
    //console.log(A[i])
    //let curr = A[i]
    let l = i + 1
    let r = A.length - 1

    while (l < r) {
        //console.log(A[i], A[l], A[r], B, Math.abs(A[i] + A[l] + A[r]) < B)

        if (Math.abs(A[i] + A[l] + A[r] - B) < Math.abs(curr - B)) {
            curr = A[i] + A[l] + A[r]
        }


        if (A[i] + A[l] + A[r] > B) {
            r--
        }
        else /* if (A[i] + A[l] + A[r] < B) { */
            l++
        // }
    }





}

console.log(curr) 