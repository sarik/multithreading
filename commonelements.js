let A = [1, 2, 2, 1]
let B = [2, 3, 1, 2]
let map1 = new Map()
let map2 = new Map()

let uniqueKeys = []

for (let i = 0; i < A.length; i++) {
    if (map1.has(A[i])) {
        map1.set(A[i], map1.get(A[i]) + 1)
    }
    else {
        uniqueKeys.push(A[i])
        map1.set(A[i], 1)
    }
}

for (let i = 0; i < B.length; i++) {
    if (map2.has(B[i])) {
        map2.set(B[i], map2.get(B[i]) + 1)
    }
    else
        map2.set(B[i], 1)
}

let ans = []

console.log(map1)
console.log(map2)
console.log(uniqueKeys)

for (let i = 0; i < uniqueKeys.length; i++) {
    if (map2.has(uniqueKeys[i])) {
        //if (map1.get(A[i]) === map2.get(A[i])) {
        //ans.push(A[i])
        //}

        let minOccurence = Math.min(map1.get(uniqueKeys[i]), map2.get(uniqueKeys[i]))
        console.log(minOccurence)

        for (let j = 0; j < minOccurence; j++) {
            ans.push(uniqueKeys[i])
        }


    }

}

console.log(ans)