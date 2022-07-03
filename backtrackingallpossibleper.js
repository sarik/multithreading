let A = [1, 2, 3];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function allPossiblePerm(arr, n, curr, i, ans) {
  if (i === n) {
    ans.push([...arr]);
    return;
  }

  for (let j = i; j < n; j++) {
    swap(arr, i, j);
    allPossiblePerm(arr, n, curr, i + 1, ans);
    swap(arr, i, j);
  }
}

let ans = [];
allPossiblePerm(A, A.length, [], 0, ans);

console.log(ans);
