let A = 26;
let ans = "";

A = A - 1;

while (A !== 0) {
  let curr = A % 26;

  ans += String.fromCharCode(curr + 65);
  A = Math.floor(A / 26);
}

console.log(ans);
