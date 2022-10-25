let A = [48, 45, -3, 7, -25, 38, 2, 13, 13, 18, -44, 34, -27, -46, 48, -39, -41, -32, -16, 17, -6, 44, -28, -44, -6, -43, -16, 30, -3, -27, 32, 38, -26, 20, 4, -44, -37]
let B = [47, -42, 41, 22, -4, -35, -45, -22, 5, -20, 21, -13, 47, 32, -48, 47, 17, -23, 30, -30, 37, 42, 44, 23, 1, -40, -9, 34, -34, 49, 16, -35, 2, -19, 31, 23, -37]


let ans = 0
let gcd = function (a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}


for (let i = 0; i < A.length; i++) {
    let currMax = 0
    let overLap = 0
    let map = new Map()

    for (let j = i + 1; j < A.length; j++) {

        if (A[i] === A[j] && B[i] === B[j])
            overLap++
        else {
            let isNegative = false


            if (A[j] - A[i] < 0) isNegative = !isNegative
            if (B[j] - B[i] < 0) isNegative = !isNegative
            console.log("before ", A[j] - A[i], "::", B[j] - B[i], "::IsNegative", isNegative)
            let deltaX = Math.abs(A[j] - A[i])
            let deltaY = Math.abs(B[j] - B[i])

            let gcdOf2 = gcd(deltaX, deltaY)
            //console.log("before ", deltaX, "::", deltaY)
            deltaX /= gcdOf2
            deltaY /= gcdOf2

            //console.log("After ", deltaX, "::", deltaY)

            let key = deltaX + "$" + deltaY

            if (isNegative)
                key = deltaX + "$$" + deltaY

            console.log(key)
            console.log("**********")
            if (map.has(key)) {
                map.set(key, map.get(key) + 1)
            }
            else
                map.set(key, 1)

            currMax = Math.max(currMax, map.get(key) + 1)



        }

    }

    //console.log(map)
    //console.log("*******")
    ans = Math.max(ans, currMax + overLap )
}

console.log(ans)