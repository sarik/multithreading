let A = [1, 2, 3, 4,];
let sum = 1000;

function combination(i, sum, arr, n, k, curr) {
  if (i === n) {
    if (sum === k) {
      console.log(curr);
    }
    return;
  }

  curr.push(A[i]);
  combination(i + 1, sum + A[i], arr, n, k, curr);
  curr.pop();
  combination(i + 1, sum, arr, n, k, curr);
}

//combination(0, 0, A, A.length, 8, []);

function combination2(sum, k, curr, rest) {
  if (sum === k) {
    console.log(curr);
    return;
  }
  if (sum > k) {
    // console.log(curr);
    return;
  }

  for (let j = 0; j < rest.length; j++) {
    combination2(sum + rest[j], k, [...curr, rest[j]], rest.slice(j));
  }
}

//combination(0, 0, A, A.length, 8, []);
combination2(0, 8, [], A);
