let A = 263
let AString = (A + "").split("").map(val => Number(val))
console.log(AString)
let map = new Map()
for (let i = 0; i < AString.length; i++) {
    let curr = AString[i]
    console.log(curr, "out")
    if (map.has(curr)) console.log(0)
    else map.set(curr, 1)

    for (j = i + 1; j < AString.length; j++) {

        curr = curr * AString[j]
        console.log(curr, "in")
        if (map.has(curr)) console.log(0)
        else map.set(curr, 1)


    }


}

console.log(1) 