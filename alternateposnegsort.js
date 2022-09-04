let A = [-1, -2, -3, 4, 5]
let positives = A.filter(val => val === Math.abs(val))
let negatives = A.filter(val => val !== Math.abs(val))

console.log(positives)
console.log(negatives)


let min = Math.min(positives.length, negatives.length)
let finalArray = []

let i = 0
while (i < min) {
    finalArray.push(negatives[i])
    finalArray.push(positives[i])
    i++
}

console.log(finalArray)


if (min !== positives.length) {
    for (let i = min; i < positives.length; i++) {
        finalArray.push(positives[i])
    }

}
else {
    for (let i = min; i < negatives.length; i++) {
        finalArray.push(negatives[i])
    }
}
console.log(finalArray)
    //return finalArray