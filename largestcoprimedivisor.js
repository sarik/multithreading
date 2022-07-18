let A = 30;
let B = 12;
function gcd(a, b) {
  if (b == 0) {
    return a;
  }

  return gcd(b, a % b);
}

while (gcd(A, B) !== 1) {
  console.log(A, B, "first", gcd(A, B));
  A = A / gcd(A, B);
}

console.log(A);
