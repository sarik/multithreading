

function maximumTastiness(arr, k) {

    let l = 0
    let r = arr.length
    //console.log(l, r)
    let ans = 0

    //logn
    while (l <= r) {
        //let mid = l + Math.floor((r - l) / 2)
        let mid = Math.floor((l + r) / 2)
        //console.log(mid)

        //n
        if (check(k, arr, mid)) {
            ans = Math.max(ans, mid)
            l = mid + 1


        }
        else {
            r = mid - 1
        }
    }

    return ans


    //TC - n
    function check(k, arr, mid) {

        //create an initial sliding window
        //move to new windows,if we can get all 1 if we flip less than k bits,return true
        //else return false

        //initial sliding window

        let noOfZeroes = 0
        for (let i = 0; i < mid; i++) {
            if (arr[i] === 0)
                noOfZeroes++

        }

        if (noOfZeroes <= k) {
            return true
        }


        //1,1,0,0,1,1 mid - 3
        for (let i = mid; i < arr.length; i++) {
            if (arr[i] === 0) {
                noOfZeroes++
            }
            if (arr[i - mid] === 0) {
                noOfZeroes--
            }

            if (noOfZeroes <= k) {
                return true
            }
        }

        return false
    }



};

console.log(maximumTastiness([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(maximumTastiness([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))
//console.log(maximumTastiness([7, 7, 7, 7], 2))
//console.log(check(3, [1, 2, 5, 8, 13, 21], 7))
