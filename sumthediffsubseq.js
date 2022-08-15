let A = [5, 4, 2];
A = A.sort((a, b) => a - b);

let largestContribution = 0;
let smallestContribution = 0;

let n = A.length;

for (let i = 0; i < A.length; i++) {
  largestContribution += A[i] * Math.pow(2, i);

  smallestContribution += A[i] * Math.pow(2, n - i - 1);
  console.log(A[i], Math.pow(2, n - i - 1));
}
console.log(largestContribution);
console.log(smallestContribution);
console.log(largestContribution - smallestContribution);
