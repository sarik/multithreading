let A = 2
let ans = []

function genSeq(curr, i, n) {
    if (i === n) {
        ans.push([...curr])
        return
    }

    curr.push(0)
    genSeq(curr, i + 1, n)
    curr.pop()
    curr.push(1)
    genSeq(curr, i + 1, n)
    curr.pop()

}

genSeq([], 0, A)

ans = ans.map(val => {

    let arrLength = val.length
    let currAns = 0
    for (let i = 0; i < arrLength; i++) {
        currAns += Math.pow(2, arrLength - i - 1) * val[i]

    }
    return currAns
})

console.log(ans)