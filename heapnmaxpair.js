let A = [3, 2, 4, 2];
let B = [4, 3, 1, 2];
A = [2, 4, 1, 1];
B = [-2, -3, 2, 4];
A = [
  36, 27, -35, 43, -15, 36, 42, -1, -29, 12, -23, 40, 9, 13, -24, -10, -24, 22,
  -14, -39, 18, 17, -21, 32, -20, 12, -27, 17, -15, -21, -48, -28, 8, 19, 17,
  43, 6, -39, -8, -21, 23, -29, -31, 34, -13, 48, -26, -35, 20, -37, -24, 41,
  30, 6, 23, 12, 20, 46, 31, -45, -25, 34, -23, -14, -45, -4, -21, -37, 7, -26,
  45, 32, -5, -36, 17, -16, 14, -7, 0, 37, -42, 26, 28,
];
B = [
  38, 34, -47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20,
  -16, 28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31,
  -10, -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33,
  -31, -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27,
  -32, -5, -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43,
];

A = [48, 46, 45, 43, 43, 42, 41, 40, 37];
B = [49, 47, 47, 47, 46, 45, 44, 43, 42, 39, 38, 38];

A = A.sort((a, b) => b - a);
B = B.sort((a, b) => b - a);

console.log(A);
console.log(B);

function heapify_max(arr, n) {
  let i = n;

  //while atleast left child exists,ie it is not a leaf
  while (2 * i + 1 < arr.length) {
    let max = Math.max(arr[i][0], arr[2 * i + 1][0]);
    if (2 * i + 2 < arr.length)
      max = Math.max(arr[i][0], arr[2 * i + 1][0], arr[2 * i + 2][0]);

    if (max === arr[i][0]) break;
    else if (max === arr[2 * i + 1][0]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 1];
      arr[2 * i + 1] = temp;
      i = 2 * i + 1;
    } else if (max === arr[2 * i + 2][0]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 2];
      arr[2 * i + 2] = temp;
      i = 2 * i + 2;
    }
  }
}

function extract_max(arr) {
  let len = arr.length;
  let temp = arr[0];
  arr[0] = arr[len - 1];
  arr[len - 1] = temp;
  arr.pop();
  heapify_max(arr, 0);
  return temp;
}

function insert_max(arr, k) {
  arr.push(k);

  let i = arr.length - 1;

  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);

    if (arr[parent][0] < arr[i][0]) {
      let temp = arr[i];
      arr[i] = arr[parent];
      arr[parent] = temp;

      i = Math.floor((i - 1) / 2);
    } else break;
  }
}

let ans = [];
let heap = [[A[0] + B[0], 0, 0]];
let map = new Map();
map.set("0::0", 1);

while (ans.length < A.length) {
  let [extracted, i, j] = extract_max(heap);
  console.log(extracted, "extrached", i, j);

  ans.push(extracted);

  console.log("to be pushed", i + 1 + "::" + j, i + "::" + (j + 1));
  console.log(map, map.has(i + 1 + "::" + j));
  if (!map.has(i + 1 + "::" + j)) {
    //continue;
    //else
    map.set(i + 1 + "::" + j, 1);
    insert_max(heap, [A[i + 1] + B[j], i + 1, j]);
    console.log(A[i + 1] + B[j], "pushing", i + 1 + "::" + j);
  }

  if (!armap.has(i + "::" + (j + 1))) {
    //continue;
    //else
    map.set(i + "::" + (j + 1), 1);
    insert_max(heap, [A[i] + B[j + 1], i, j + 1]);
    console.log(A[i] + B[j + 1], "pushing", i + "::" + (j + 1));
  }
  console.log(heap, "heap");
}

console.log(ans);
