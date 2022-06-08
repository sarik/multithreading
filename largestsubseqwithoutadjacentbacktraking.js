let A = [9, 4, 13, 24];

console.log("first");

function getMaxSub(i, arr, n, sum, rest) {
  //console.log(sum, rest, i);
  if (i >= n - 1) {
    console.log(sum, i);
    return;
  }

  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    getMaxSub(j + 2, arr, n, sum, rest.slice(j + 2));
    sum -= arr[j];
  }
}

getMaxSub(0, A, A.length, 0, A);
