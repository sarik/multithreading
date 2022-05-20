//Create a function add such that
//add(1)(2)(3)(4)(5)() // returns 15
//add(2)(5)() // returns 7
//add(6)(1)(9)() // returns 16

function sum(a) {
  if (!a) return 0;

  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(2)(5)());
console.log(sum(6)(1)(9)());
console.log(sum());
