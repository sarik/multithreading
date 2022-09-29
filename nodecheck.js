var x = 15




function print() {


    var x = 10;
    console.log(x)
    y = 20;
}

function prinnt() {
    console.log(x)
    console.log(y)


}

print()
prinnt()


console.log("***************************")
function add(a) {
    // Your code goes here.
    if (a === undefined) return 0;

    return function (b) {
        if (b) {
            return add(a + b);
        } else {
            return a;
        }
    };
}

// const sum = function (...a) {
//     //a = getSum(a);
//     return function (...b) {
//         if (b.length) {
//             return sum(Number(a) + Number(b));
//         }
//         return a;
//     };
// };


console.log(add());
console.log(add(4)());
console.log(add(4)(3)());
console.log(add(4)(3)(2)());