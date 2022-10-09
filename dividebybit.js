let A = 0
let B = 1
let sign = 1
if (A < 0)
    sign *= -1
if (B < 0)
    sign *= -1

let n = Math.abs(A)
let m = Math.abs(B)
let ans = 0

console.log(n,m)

for (let i = 31; i >= 0; i--) {
    if ((m << i) <= n) {
        console.log(m << i, n - (m << i))
        n = n - (m << i)
        ans += 1 << i
    }
}

console.log(sign, ans)
// if (sign) return ans
// else return ans * -1