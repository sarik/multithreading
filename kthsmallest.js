let A = [
  [5, 9, 11],
  [9, 11, 13],
  [10, 12, 15],
  [13, 14, 16],
  [16, 20, 21],
];
let B = 12;
function heapify(arr, n) {
  let i = n;

  //while atleast left child exists,ie it is not a leaf
  while (2 * i + 1 < arr.length) {
    let max = Math.max(arr[i], arr[2 * i + 1]);
    if (2 * i + 2 < arr.length)
      max = Math.max(arr[i], arr[2 * i + 1], arr[2 * i + 2]);

    if (max === arr[i]) break;
    else if (max === arr[2 * i + 1]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 1];
      arr[2 * i + 1] = temp;
      i = 2 * i + 1;
    } else if (max === arr[2 * i + 2]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 2];
      arr[2 * i + 2] = temp;
      i = 2 * i + 2;
    }
  }
}
function extract(arr) {
  let len = arr.length;
  let temp = arr[0];
  arr[0] = arr[len - 1];
  arr[len - 1] = temp;
  arr.pop();
  heapify(arr, 0);
  return temp;
}

function insert(arr, k) {
  arr.push(k);

  let i = arr.length - 1;

  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);

    if (arr[parent] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[parent];
      arr[parent] = temp;

      i = Math.floor((i - 1) / 2);
    } else break;
  }
}

let count = 0;

let fillingC = true;
let others = [];
let C = [];
for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A[0].length; j++) {
    if (fillingC) {
      C.push(A[i][j]);
      count++;
      if (count === B) {
        fillingC = false;
      }
    } else others.push(A[i][j]);
  }
}

console.log(C);
let lastNonLeaf = Math.floor((C.length - 2) / 2);

//build
for (let i = lastNonLeaf; i >= 0; i--) {
  heapify(C, i);
}

for (let i = 0; i < others.length; i++) {
  if (others[i] >= C[0]) continue;
  else {
    extract(C);
    insert(C, others[i]);
  }
}

console.log(C);
