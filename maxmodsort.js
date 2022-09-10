let A = [927, 707, 374, 394, 279, 799, 878, 937, 431, 112]

A = A.sort((a, b) => a - b)

let lastIndex = A.length - 2

while (lastIndex >= 0) {
    if (A[lastIndex] !== A[lastIndex + 1]) {
        break
    }
    else lastIndex--
}

if (lastIndex === -1) return 0

console.log(A[lastIndex] % A[A.length - 1]) 