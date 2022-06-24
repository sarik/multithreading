let A = ["1", "2", "3"];

let ans = [];
function getCombination(A, curr, count) {
  if (count > 10) return;
  let ans = []
  for (let i = 0; i < A.length; i++) {
    console.log(curr + A[i]);
    ans.push(curr + A[i]);
  }
  for (let i = 0; i < A.length; i++) {
    let temp = ans[0];
    ans = ans.slice(1);
    getCombination(A, temp, count + 3);
  }
}
getCombination(A, "", 0);
