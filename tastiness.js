

function maximumTastiness(price, k) {

    //Sort the array
    price = price.sort((a, b) => a - b)



    let l = 1
    let r = price[price.length - 1] - price[0]
    //console.log(l, r)
    let ans = 0

    while (l <= r) {
        //let mid = l + Math.floor((r - l) / 2)
        let mid = Math.floor((l + r) / 2)
        //console.log(mid)

        if (check(k, price, mid)) {
            ans = Math.max(ans, mid)
            l = mid + 1


        }
        else {
            r = mid - 1
        }
    }

    return ans

    function check(k, price, mid) {
        let count = 1
        let curr = price[0]
    
        for (let i = 1; i < price.length; i++) {
            if (price[i] - curr >= mid) {
                count++
                if (count === k) {
                    return true
                }
                curr = price[i]
    
            }
    
        }
    
        return false
    }



};

console.log(maximumTastiness([13, 5, 1, 8, 21, 2], 3))
console.log(maximumTastiness([7, 7, 7, 7], 2))
//console.log(check(3, [1, 2, 5, 8, 13, 21], 7))
