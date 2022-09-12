let A = [2, 0, 1, 3]
let noOfChunks = 0

let maxElement = A[0]

for (let i = 0; i < A.length; i++) {

    maxElement = Math.max(maxElement, A[i])
    if (i === maxElement) {
        noOfChunks++
    }
}

//return noOfChunks === 0 ? 1 : noOfChunks
console.log(noOfChunks === 0 ? 1 : noOfChunks)