let A = [
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
]

let N = A.length

let M = A[0].length

let dp = new Array(N)

for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(M).fill(0)
}

/* for (let i = 0; i < N; i++) {
    if (dp[i][0] === 1)
        dp[i][1] = 1
}

for (let i = 0; i < M; i++) {
    if (dp[0][M] === 1)
        dp[0][i] = 1
} */

for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {

        if (i === 0 || j === 0) {
            if (A[i][j] === 1) {
                dp[i][j] = 1
            }
            continue
        }
        if (A[i][j] === 0) continue

        else dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
    }
}


console.log(A)
console.log(dp)