let A = [
  [26, 41],
  [40, 47],
  [47, 7],
  [50, 34],
  [18, 28],
];
let B = 5;
let distances = [];

for (let i = 0; i < A.length; i++) {
  let [x, y] = A[i];
  let euclideanDis = Math.pow(x, 2) + Math.pow(y, 2);
  distances.push(euclideanDis);
}

function merge(A, l, mid, r) {
  let p1 = l;
  let p2 = mid;

  let C = [];
  while (p1 < mid && p2 <= r) {
    if (A[p1] <= A[p2]) {
      C.push(A[p1]);
      p1++;
    } else {
      C.push(A[p2]);
      p2++;
    }
  }
  while (p1 < mid) {
    C.push(A[p1]);
    p1++;
  }
  while (p2 <= r) {
    C.push(A[p2]);
    p2++;
  }

  for (let i = 0; i < C.length; i++) {
    A[l + i] = C[i];
  }
}
function mergeSort(A, l, r) {
  if (l >= r) return;

  //while (l < r) {
  let mid = Math.floor((l + r) / 2);

  mergeSort(A, l, mid);
  mergeSort(A, mid + 1, r);

  merge(A, l, mid + 1, r);
  //}
}

mergeSort(distances, 0, distances.length - 1);
//distances.sort((a, b) => a - b);

console.log(distances);

return distances[B - 1];
