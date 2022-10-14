let A = "ajafafgja"
A = A.split("").sort().join("")

let odd = ""
let even = ""

for (let i = 0; i < A.length; i++) {

    if (A[i].charCodeAt() % 2 === 0)
        odd += A[i]
    else even += A[i]
}

console.log(odd)
console.log(even)
console.log(odd[odd.length - 1].charCodeAt(), "::", even[0].charCodeAt(), Math.abs(odd[odd.length - 1].charCodeAt() - even[0].charCodeAt()))
console.log(even[even.length - 1].charCodeAt() - odd[0].charCodeAt(), Math.abs(even[even.length - 1].charCodeAt() - odd[0].charCodeAt()))

if (Math.abs(odd[odd.length - 1].charCodeAt() - even[0].charCodeAt()) === 1)
    console.log("here", 0)

if (Math.abs(even[even.length - 1].charCodeAt() - odd[0].charCodeAt()) === 1)
    console.log("there",0)
else
    console.log(1)