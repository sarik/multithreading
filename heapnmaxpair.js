let A = [3, 2, 4, 2];
let B = [4, 3, 1, 2];
A = [2, 4, 1, 1];
B = [-2, -3, 2, 4];
A = A.sort((a, b) => b - a);
B = B.sort((a, b) => b - a);

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

  ans.push(extracted);

  if (map.has(i + 1 + "::" + j)) continue;
  else {
    map.set(i + 1 + "::" + j, 1);
    insert_max(heap, [A[i + 1] + B[j], i + 1, j]);
  }
  if (map.has(i + "::" + (j + 1))) continue;
  else {
    map.set(i + "::" + (j + 1), 1);
    insert_max(heap, [A[i] + B[j + 1], i, j + 1]);
  }
}

console.log(ans);
