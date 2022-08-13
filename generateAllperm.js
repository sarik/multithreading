let A = ["s", "a", "r"];

function swap(i, j, A) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

let ans_old = [];
function genAllPer(i, A, n, ans_old) {
  if (i === n) {
    ans_old.push([...A]);
    return;
  }
  /*
  for (let j = i; j < n; j++) {
    swap(i, j, A);
    genAllPer(j + 1, A, n, ans_old);
    swap(i, j, A);
  }*/
  for (let j = i; j < n; j++) {
    //do
    swap(i, j, A);
    genAllPer(i + 1, A, n, ans_old);
    //undo
    swap(i, j, A);
  }
}

function perm(i, arr, n, ans) {
  if (i === n) {
    ans.push([...arr]);
    return;
  }

  //iterating over all possibilities
  for (let j = i; j < n; j++) {
    //do
    swap(i, j, arr);
    perm(i + 1, arr, n, ans);
    //undo
    swap(i, j, arr);
  }
}

//genAllPer(0, A, A.length, ans_old);

console.log(A);

let ans = [];
perm(0, A, A.length, ans);
console.log(ans);

genAllPer(0, A, A.length, ans_old);

console.log(ans_old);
