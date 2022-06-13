let A = "A";
let ans = 0;

for (let i = A.length - 1; i >= 0; i--) {
  let currLetter = A[i];
  console.log(currLetter);

  ans +=
    (Number(currLetter.charCodeAt()) - 64) * Math.pow(26, A.length - 1 - i);
}

console.log(ans);
