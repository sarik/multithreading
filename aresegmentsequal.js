let A = [1, 7, 11, 8, 11, 7, 1]
let B =
    [
        [0, 2, 4, 6]
    ]

let ans = []

for (let i = 0; i < B.length; i++) {
    let query = B[i]
    if (query[1] - query[0] !== query[3] - query[2]) {
        ans.push(0)
        continue
    }




    let firstSlice = A.slice(query[0], query[1] + 1).sort((a, b) => a - b)
    let secondSlice = A.slice(query[2], query[3] + 1).sort((a, b) => a - b)

    console.log(firstSlice)
    console.log(secondSlice)

    let isSame = true
    for (let j = 0; j < firstSlice.length; j++) {
        if (firstSlice[j] !== secondSlice[j]) {
            isSame = false
        }
    }

    isSame ? ans.push(1) : ans.push(0)

}

console.log(ans)

