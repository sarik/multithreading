let A = "1101010001";
/*let C = [];

for (let i = 0; i < A.length; i++) {
  if (A[i] === "0") C.push(1);
  else C.push(-1);
}

let cadane = new Array(C.length);

cadane[0] = Math.max(C[0],0)

console.log(C);

for (let i = 1; i < C.length; i++) {
  cadane[i] = Math.max(cadane[i - 1] + C[i], C[i]);
  if (cadane[i] < 0) cadane[i] = 0;
}

console.log(cadane);

let max = -1;
let maxIndex = -1;

for (let i = 0; i < cadane.length; i++) {
  if (cadane[i] > max) {
    maxIndex = i;
  }
  max = Math.max(max, cadane[i]);
}

console.log(maxIndex);
if (max === 0) {
  console.log("first");
}

let minIndex = maxIndex;
while (minIndex >= 0) {
  if (cadane[minIndex] === 0) {
    break;
  }
  minIndex--;
}



console.log([minIndex + 1, maxIndex + 1]);*/
A = "1101010001";
A = [...A].map((ele) => (+ele == 1 ? -1 : 1));
console.log(A);
let a = -1,
  b = 0,
  sum = 0,
  cur = 0,
  s = 0;
for (let i = 0; i < A.length; i++) {
  sum += A[i];
  if (sum > cur) {
    cur = sum;
    a = s;
    b = i;
  } else if (sum < 0) {
    sum = 0;
    s = i + 1;
  }
}
/*if (a == -1) return [];
else return [a + 1, b + 1];*/

console.log([a + 1, b + 1])
