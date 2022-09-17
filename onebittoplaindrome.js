let A = "abba";
let n = A.length

let totalOffsets = 0

let positionTillToCheck = n / 2

if (n % 2 === 1)
    positionTillToCheck = Math.floor(n / 2)

console.log(positionTillToCheck)


for (let i = 0; i < positionTillToCheck; i++) {
    console.log(i, "checking", n - i - 1)

    if (A[i] !== A[n - i - 1]) {
        console.log("was here")
        totalOffsets++
    }

    if (totalOffsets >= 2)
        console.log("NO")
}

if (n % 2 === 1 && totalOffsets === 0) console.log("YES")
if (totalOffsets === 0) console.log("NO")
console.log("YES")

