//Create a function add such that
//add(1)(2)(3)(4)(5)() // returns 15
//add(2)(5)() // returns 7
//add(6)(1)(9)() // returns 16

function add(args) {
  return (args2) => {
    return args + args2;
  };
}

console.log(add(2)(3));

const sum = function (...a) {
  const getSum = (d) => {
    return d.reduce((i, j) => i + j, 0);
  };

  a = getSum(a);
  return function (...b) {
    if (b.length) {
      return sum(a + getSum(b));
    }
    return a;
  };
};
console.log(sum(1)(2)(3)(4, 5)(6)(8)());

const mod = {
  exports: {},
};

let exp = mod.exports;

exp.publicFoo = "Welcome to public foo";

//console.log(exp)
exp = { publicFoo: "This is Awesome" };
//console.log(exp)
console.log(mod.exports.publicFoo);
console.log(exp.publicFoo);

/*async function x() {
  await y();
  console.log("X");
}

async function y() {
  console.log("Y");
}

function a() {
  x();
  y();
}

a();*/

//ip = [9,9,8,6,2,9,0,2,9,1] - pick 1st unique number

let ip = [9, 9, 8, 6, 2, 9, 0, 2, 9, 1];

//element to occurence mapping
let input = new Map();

//let keys = []

for (let i = 0; i < ip.length; i++) {
  if (!input.has(ip[i])) {
    input.set(ip[i], 1);
  } else {
    input.set(ip[i], input.get(ip[i]) + 1);
  }
}

for (let i = 0; i < ip.length; i++) {
  if (input.get(ip[i]) === 1) {
    console.log(ip[i]);
    break;
  }
}
