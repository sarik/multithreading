let A = [1, 2, 3, 1, 2, 4]
A = [186, 256, 102, 377, 186, 377]
let xoroftwo = A[0]

for (let i = 1; i < A.length; i++) {
  xoroftwo ^= A[i]
}

//console.log(xoroftwo)

let firstsetbitInXorOfTwo

for (let i = 0; i < 32; i++) {
  if ((Math.pow(2, i) & xoroftwo) !== 0) {
    firstsetbitInXorOfTwo = i
    break
  }
}

console.log(firstsetbitInXorOfTwo)

let setArray = []
let unsetArray = []
for (let i = 0; i < A.length; i++) {
  if ((Math.pow(2, firstsetbitInXorOfTwo) & A[i]) !== 0) {
    setArray.push(A[i])
  } else unsetArray.push(A[i])
}

console.log(setArray, unsetArray)

let unsetAns = unsetArray[0]
let setAns = setArray[0]

for (let i = 1; i < unsetArray.length; i++) {
  unsetAns ^= unsetArray[i]
}

for (let i = 1; i < setArray.length; i++) {
  setAns ^= setArray[i]
}

console.log(setAns, unsetAns)
