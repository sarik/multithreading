let A = [1, 2, 3, 4, 5]
let B = [2, 4, 6, 8]
let C = 9

A = [5, 10, 20]
B = [1, 2, 30]
C = 13


A = [1]
B = [2, 4]
C = 4

let i = 0
let j = B.length - 1
let ansl
let ansr

let diff = Number.MAX_VALUE
while (i < A.length && j >= 0) {
    //if abs difference increases, 
    if ((Math.abs((A[i] + B[j]) - C)) < diff) {
        diff = Math.abs((A[i] + B[j]) - C)
        ansl = i
        ansr = j

    }
    else if ((Math.abs((A[i] + B[j]) - C)) === diff) {
        if (i < ansl) {
            ansl = i
            ansr = j
        }
        if (i === ansl && j < ansr) {
            ansl = i
            ansr = j
        }
    }

    //Have to remain close to C
    if (A[i] + B[j] > C)
        j--;
    else  // move to the greater side
        i++;

}

console.log(A[ansl],B[ansr])