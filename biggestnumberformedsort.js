let A = [8, 89]
A = [3, 30, 34, 5, 9]
//A = [345, 2, 1, 9]
A = A.sort((a, b) => {
    let aval = a + ""
    let bval = b + ""

    if (Number(aval[0]) !== Number(bval[0])) {
        return Number(bval[0]) - Number(aval[0])
    }

    /* else if (Number(aval[0]) < Number(bval[0])) {
        return b - a
    } */
    return Number(b + "" + a) - Number(a + "" + b)
})

let ans = ""
console.log(A)
A.forEach(a => {
    ans += "" + a
})

let trailingzeroindex = -1
for (let i = 0; i < ans.length; i++) {
    if (ans[i] == "0") {
        trailingzeroindex = i
    }
    else {
        break
    }
}
let realans = ans.substring(trailingzeroindex).length > 0 ? ans.substring(trailingzeroindex) : "0"


console.log(realans)