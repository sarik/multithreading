let A = 3
let B = 2
let C = [[7, 3], [2, 1], [4, 9]]

for (let i = 0; i < A; i++) {
    C[i] = C[i].sort((a, b) => a - b)

}

console.log(C)