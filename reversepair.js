let arr = [1, 3, 2, 3, 1];
//A = [4, 1, 2];
arr = [
  14046, 57239, 78362, 99387, 27609, 55100, 65536, 62099, 40820, 33056, 88380,
  78549, 57512, 33137, 81212, 32365, 42276, 65368, 52459, 74924, 25355, 76044,
  78056, 45190, 94365, 58869, 20611,
];

arr = [1, 3, 2, 3, 1];
function merge(A, l, mid, r) {
  let p1 = l;
  let p2 = mid;

  let C = [];
  while (p1 < mid && p2 <= r) {
    if (A[p1] < A[p2]) {
      C.push(A[p1]);
      p1++;
    } else {
      if (A[p1] >= A[p2]) {
        let temp = p1;
        /* while (temp < mid) {
                    if (A[temp] > A[p2] * 2)
                        ans++
                    temp++
                } */
        while (A[temp] < 2 * A[p2] && temp < mid) temp++;
        ans += mid - 1 - temp + 1;
      }
      C.push(A[p2]);
      p2++;
    }
  }

  while (p1 < mid) {
    C.push(A[p1]);
    p1++;
  }

  while (p1 < mid && p2 <= r) {
    C.push(A[p2]);
    p2++;
  }

  for (let i = 0; i < C.length; i++) {
    A[i + l] = C[i];
  }
}

function mergeAndCount(arr, l, m, r) {
  // Left subarray
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  // Right subarray
  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      if (left[i] > 2 * arr[j]) {
        swaps += m + 1 - (l + i);
      }
      arr[k++] = right[j++];
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {
  // Keeps track of the inversion count at a
  // particular node of the recursion tree
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    // Total inversion count = left subarray count
    // + right subarray count + merge count

    // Left subarray count
    count += mergeSortAndCount(arr, l, m);

    // Right subarray count
    count += mergeSortAndCount(arr, m + 1, r);

    // Merge count
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
}
console.log(mergeSortAndCount(arr, 0, arr.length - 1));
//console.log(ans);
