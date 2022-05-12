function merge(arr, l, mid, r) {
  let p1 = l;
  let p2 = mid;

  let C = [];

  while (p1 < mid && p2 <= r) {
    if (arr[p1] <= arr[p2]) {
      C.push(arr[p1]);
      p1++;
    } else {
      C.push(arr[p2]);
      p2++;
    }
  }

  while (p1 < mid) {
    C.push(arr[p1]);
    p1++;
  }
  while (p2 <= r) {
    C.push(arr[p2]);
    p2++;
  }

  for (let i = 0; i < C.length; i++) {
    arr[l + i] = C[i];
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  //let mid = Math.floor(l + (r - l) / 2) + 1;
  let mid = Math.floor((l + r) / 2);

  console.log(l, r, mid);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid + 1, r);
}

let arr = [5, 4, 3, 2, 1];
mergeSort(arr, 0, arr.length - 1);

console.log("ans", arr);
