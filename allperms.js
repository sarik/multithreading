let A = [1, 2, 8];
let ans = [];
let B = 2;

function genSeq(i, n, sum, arr) {
  if (i === n) {
    if (sum <= 1000 && arr.length === B) {
      ans.push(arr);
    }
    return;
  }

  //taking ith item
  arr.push(A[i]);
  genSeq(i + 1, n, sum + A[i], arr);
  arr.pop();
  genSeq(i + 1, n, sum, arr);
}

genSeq(0, A.length, 0, []);

console.log(ans);
