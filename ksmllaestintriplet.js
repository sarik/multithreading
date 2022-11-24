let A = [22, 10, 5, 11, 16, 2, 11, 7, 16, 2, 17, 6, 15, 3, 9, 6]

let B = 183

A = A.sort((a, b) => a - b)

let arr = []
let counter = 0
for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
        for (let k = j + 1; k < A.length; k++) {
            let curr = A[i] + A[j] + A[k]

            if (!arr.includes(curr)) {
                arr.push(curr)
                counter++
            }

            //console.log(i, j, k)
            if (counter === B - 1) {
                break
            }

        }
    }
}

console.log(arr)
console.log(arr[arr.length - 1])