let A = [4, 6, 8, 4]

function heapify_min(arr, n) {
    let i = n

    //while atleast left child exists,ie it is not a leaf
    while (2 * i + 1 < arr.length) {
        let min = Math.min(arr[i], arr[2 * i + 1])
        if (2 * i + 2 < arr.length)
            min = Math.min(arr[i], arr[2 * i + 1], arr[2 * i + 2])

        if (min === arr[i]) break
        else if (min === arr[2 * i + 1]) {
            let temp = arr[i]
            arr[i] = arr[2 * i + 1]
            arr[2 * i + 1] = temp
            i = 2 * i + 1
        } else if (min === arr[2 * i + 2]) {
            let temp = arr[i]
            arr[i] = arr[2 * i + 2]
            arr[2 * i + 2] = temp
            i = 2 * i + 2
        }
    }
}

function extract_min(arr) {
    let len = arr.length
    let temp = arr[0]
    arr[0] = arr[len - 1]
    arr[len - 1] = temp
    arr.pop()
    heapify_min(arr, 0)
    return temp
}

function insert_min(arr, k) {
    arr.push(k)

    let i = arr.length - 1

    while (i > 0) {
        let parent = Math.floor((i - 1) / 2)

        if (arr[parent] > arr[i]) {
            let temp = arr[i]
            arr[i] = arr[parent]
            arr[parent] = temp

            i = Math.floor((i - 1) / 2)
        } else break
    }
}

function heapify_max(arr, n) {
    let i = n

    //while atleast left child exists,ie it is not a leaf
    while (2 * i + 1 < arr.length) {
        let max = Math.max(arr[i], arr[2 * i + 1])
        if (2 * i + 2 < arr.length)
            max = Math.max(arr[i], arr[2 * i + 1], arr[2 * i + 2])

        if (max === arr[i]) break
        else if (max === arr[2 * i + 1]) {
            let temp = arr[i]
            arr[i] = arr[2 * i + 1]
            arr[2 * i + 1] = temp
            i = 2 * i + 1
        } else if (max === arr[2 * i + 2]) {
            let temp = arr[i]
            arr[i] = arr[2 * i + 2]
            arr[2 * i + 2] = temp
            i = 2 * i + 2
        }
    }
}



function extract_max(arr) {
    let len = arr.length
    let temp = arr[0]
    arr[0] = arr[len - 1]
    arr[len - 1] = temp
    arr.pop()
    heapify_max(arr, 0)
    return temp
}

function insert_max(arr, k) {
    arr.push(k)

    let i = arr.length - 1

    while (i > 0) {
        let parent = Math.floor((i - 1) / 2)

        if (arr[parent] < arr[i]) {
            let temp = arr[i]
            arr[i] = arr[parent]
            arr[parent] = temp

            i = Math.floor((i - 1) / 2)
        } else break
    }
}


if (A.length < 3) return 0
let max = [A[0]]
let min = []
for (let i = 1; i < A.length - 1; i++) {
    if (A[i] < max[0]) {
        insert_max(max, A[i])

        if (max.length - min.length > 1) {
            let currMax = extract_max(max)
            insert_min(min, currMax)
        }
    }
    else {
        insert_min(min, A[i])
        if (min.length > max.length) {
            let currMin = extract_min(min)
            insert_max(max, currMin)
        }
    }


    if (max.length === min.length) {
        console.log(max[0] + min[0], A[i + 1])
        if (A[i + 1] === ((max[0] + min[0]) / 2)) {
            // return 1
        }
    }
    else {
        console.log(max[0], A[i + 1])

        if (A[i + 1] === max[0]) {
            //  return 1
        }
    }

}


max = [A[A.length - 1]]
min = []

console.log(max)
console.log(min)
for (let i = A.length - 2; i > 0; i--) {
    if (A[i] < max[0]) {
        insert_max(max, A[i])

        if (max.length - min.length > 1) {
            let currMax = extract_max(max)
            insert_min(min, currMax)
        }
    }
    else {
        insert_min(min, A[i])
        if (min.length > max.length) {
            let currMin = extract_min(min)
            insert_max(max, currMin)
        }
    }

    if (max.length === min.length) {
        console.log(A[i - 1], max[0] + min[0])

        if (A[i - 1] === ((max[0] + min[0]) / 2)) {
            // return 1
        }
    }
    else {
        console.log(A[i - 1], max[0])

        if (A[i - 1] === max[0]) {
            //    return 1
        }
    }

}


       // return 0