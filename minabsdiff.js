let A = [1, 2, 3, 4, 5];
A = A.sort((a, b) => a - b);

let min = Number.MAX_VALUE;

for (let i = 1; i < A.length; i++) {
  min = Math.min(min, Math.abs(A[i] - A[i - 1]));
}
console.log(min);
