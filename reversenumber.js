let A = 12345

let number = 0
let stringnumber = ""
while (A > 0) {

    number = number * 10 + (A % 10)
    stringnumber += (A % 10)
    A = Math.floor(A / 10)


}

console.log(number)
console.log(stringnumber)