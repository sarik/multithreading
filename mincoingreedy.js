let A = 1
//if (A < 5) return A

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

let largestDen = Math.pow(5, Math.floor(getBaseLog(5, A)))

console.log(largestDen)

let currDen = largestDen

let count = Math.floor(A / largestDen)
let remainder = A % largestDen



while (remainder !== 0) {
    currDen = currDen / 5

    count += Math.floor(remainder / currDen)

    remainder = remainder % currDen


}

console.log(count)