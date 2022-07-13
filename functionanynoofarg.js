function add(a) {
  return (b) => {
    if (!b) return a;
    return add(a + b);
  };
}

function add2(some) {
  return some();
}
console.log(add(2)());

console.log(add(2)(3)());

console.log(add2(add(2)(5)));

function sum(a) {
  let ans = 0;
  console.log(arguments, "length");
  Object.values(arguments).forEach((element) => {
    ans += element;
  });
  return ans;
}

function sum2(...a) {
  let ans = 0;
  a.forEach((element) => {
    ans += element;
  });
  return ans;
}

function sumreduce(...a) {
  return a.reduce((val, acc) => {
    acc += val;
    return acc;
  }, 0);
}

console.log(sum(1, 2, 13));
console.log(sum2(1, 2, 13));
console.log(sumreduce(1, 2, 13));

function delay() {
  return new Promise((res, rej) => setTimeout(() => res(1), 10));
}

(async () => {
  console.time("Testing delay");
  await delay();
  console.timeEnd("Testing delay");
})();

function getNames(names) {
  return names.reduce((acc, name) => {
    console.log("acc", acc);
    if (name.hasOwnProperty("name")) {
      acc.push(name["name"]);
    }
    return acc;
  }, []);
}

console.log(getNames([{ a: 1 }, { name: "Jane" }, {}, { name: "Mark" }]));
