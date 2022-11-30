let A = 3
let B = 2
let C = [[7, 3], [2, 1], [4, 9]]

for (let i = 0; i < A; i++) {
    C[i] = C[i].sort((a, b) => a - b)

}

console.log(C)

function getJustMinFromNextRow(num, row) {

    let l = 0
    let r = row.length - 1

    let ans = Number.MAX_VALUE

    //console.log(num, row, l, r)

    let mid;

    while (l <= r) {

        mid = Math.floor((l + r) / 2)
        //console.log(l, r, mid, row, row[mid], num)

        if (row[mid] === num) {
            break
            return 0
        }
        else if (row[mid] < num) {
            ans = row[mid]
            l = mid + 1
        }
        else if (row[mid] > num) {
            r = mid - 1
        }
    }

    return row[mid] > num ? Number.MAX_VALUE : num - row[mid]
}

function getJustMaxFromNextRow(num, row) {

    let l = 0
    let r = row.length - 1

    let ans = Number.MAX_VALUE

    //console.log(num, row, l, r)

    let mid;

    while (l <= r) {

        mid = Math.floor((l + r) / 2)
        //console.log(l, r, mid, row, row[mid], num)

        if (row[mid] === num) {
            break
            return 0
        }
        else if (row[mid] < num) {
            // ans = row[mid]
            l = mid + 1
        }
        else if (row[mid] > num) {
            r = mid - 1
        }
    }

    return row[mid] < num ? Number.MAX_VALUE : row[mid] - num
}

let min = Number.MAX_VALUE
for (let i = 0; i < A - 1; i++) {
    for (let j = 0; j < B; j++) {

        let justMin = getJustMinFromNextRow(C[i][j], C[i + 1])
        console.log("justmin", justMin)

        let justMax = getJustMaxFromNextRow(C[i][j], C[i + 1])
        console.log("justmax", justMax)

    }

}