let A = [3, 2, 1];
let ans = 0;
function merge(A, l, mid, r) {
  let i = l;
  let j = mid;

  let C = [];

  while (i < mid && j <= r) {
    if (A[i] <= A[j]) {
      C.push(A[i]);
      i++;
    } else {
      ans += mid - 1 - i + 1;
      C.push(A[j]);
      j++;
    }
  }

  while (i < mid) {
    C.push(A[i]);
    i++;
  }
  while (j <= r) {
    C.push(A[j]);
    j++;
  }

  //return C
  //console.log(C);

  for (let z = 0; z < C.length; z++) {
    A[l + z] = C[z];
  }
}

function mergeSort(A, l, r) {
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    //console.log(mid);
    mergeSort(A, l, mid);
    mergeSort(A, mid + 1, r);
    merge(A, l, mid + 1, r);
  }
}

mergeSort(A, 0, A.length - 1);

console.log(A);
console.log(ans);
