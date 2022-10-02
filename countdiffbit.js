
let A = [1, 3, 5]
let ans = 0
let mod = Math.pow(10, 9) + 7
for (let j = 0; j < 32; j++) {
    let checker = Math.pow(2, j)
    let noOfCurrBitAsOne = 0
    let noOfCurrBitAsZero = 0
    for (let i = 0; i < A.length; i++) {


        if ((checker & A[i]) == 0) {
            console.log("checked", checker, A[i])
            noOfCurrBitAsZero++
        }
        else {
            console.log("checked for onw", checker, A[i])
            noOfCurrBitAsOne++
        }



    }
    //console.log(checker, noOfCurrBitAsOne, noOfCurrBitAsZero)
    if (!(noOfCurrBitAsOne === 0 || noOfCurrBitAsZero === 0)) {
        ans = ans + (noOfCurrBitAsZero * noOfCurrBitAsOne)
    }
    //console.log(ans)
    //ans = ans % mod
}

console.log((ans * 2) % mod)
