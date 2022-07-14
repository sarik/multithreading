let A = "3141592653589793238462643383279";

let fav = [
  "314",
  "49",
  "9001",
  "15926535897",
  "14",
  "9323",
  "8462643383279",
  "4",
  "793",
];

let n = A.length;
let dp = new Array(n);
for (let i = 0; i < n; i++) {
  dp[i] = new Array(n).fill(-1);
}
console.log(dp);

function getMin(A, i, j, fav) {
  if (fav.includes(A.substring(i, j + 1))) {
    console.log(A.substring(i, j + 1) + "\n");
    return 1;
  }
  let ans = Number.MAX_VALUE;
  for (let k = i; k <= j; k++) {
    //console.log(A.substring(i, k + 1), fav.includes(A.substring(i, k + 1)));
    if (fav.includes(A.substring(i, k + 1))) {
      //take it or leave it
      ans = Math.min(1 + getMin(A, k + 1, j, fav));
    }
  }
  return ans;
}

console.log(getMin(A, 0, A.length - 1, fav) - 1);
