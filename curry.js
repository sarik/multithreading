
const sum = function (...a) {
    //a = getSum(a);
    return function (...b) {
        if (b.length) {
            return sum(Number(a) + Number(b));
        }
        return a;
    };
};

const two = (a) => b => a + b

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(2)(5)());
console.log(sum(2)(5));
console.log(sum(6)(1)(9)());
console.log(sum());
console.log(2);

console.log(two(2)(4))
