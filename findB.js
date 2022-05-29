let A = [[3], [29], [36], [63], [67], [72], [74], [78], [85]];
let B = 41;

let C = [];

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A[0].length; j++) {
    C.push(A[i][j]);
  }
}

let i = 0;
let j = C.length - 1;

console.log(C);
while (i <= j) {
  let mid = Math.floor((i + j) / 2);

  if (C[mid] < B) i = mid + 1;
  else if (C[mid] > B) j = mid - 1;
  else if (C[mid] === B) console.log(1);
}

console.log(0);
