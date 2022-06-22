function genAllSeq(question, left, right, i, curr) {
  if (i === question * 2) {
    if (left === right) {
      console.log(curr);
      return 1;
    } else return 0;
  } else if (right > left) {
    return 0;
  }

  return (
    genAllSeq(question, left + 1, right, i + 1, curr + "(") +
    genAllSeq(question, left, right + 1, i + 1, curr + ")")
  );
}

function catalane(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let catalane = new Array(n);
  catalane[0] = 1;
  catalane[1] = 1;
  for (let i = 2; i <= n; i++) {
    catalane[i] = 0;
    for (let j = 0; j < i; j++) {
      //console.log(i, "::", j, "::", i - j - 1);
      catalane[i] += catalane[j] * catalane[i - j - 1];
    }
  }

  return catalane[n];
}

let A = 4;
console.log(genAllSeq(A, 0, 0, 0, ""));

console.log(catalane(A));

/*A = 14;
console.log(genAllSeq(A, 0, 0, 0, ""));

console.log(catalane(A));


A = 519;
console.log(catalane(A));*/
//console.log(genAllSeq(A, 0, 0, 0, ""));
