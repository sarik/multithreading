let A = [8, 89]
A = A.sort((a, b) => {
    let firstComb = Number(a + '' + b)
    let secondComb = Number(b + '' + a)

    console.log(firstComb, "::", secondComb)

    return secondComb - firstComb
})

let ans = ""

A.forEach(val => {
    ans += val + ''
})

let firstNonZeroLetter = -1
for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== '0') {
        firstNonZeroLetter = i
        break
    }
}

if (firstNonZeroLetter === -1) return 0

console.log(ans.substring(0,ans.length))