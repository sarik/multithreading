let A = [7, 1, 3, 4, 1, 7]

let min = Number.MAX_VALUE
let map = new Map()
for (let i = 0; i < A.length; i++) {

    if (map.has(A[i])) {
        min = Math.min(min, Math.abs(i - map.get(A[i])))
        console.log(min)
    }

    else {
        console.log("here", A[i])
        map.set(A[i], i)
    }

}

console.log(map)

console.log(min)