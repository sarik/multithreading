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
      console.log(j, i - j - 1);
    }
    console.log(i, "**", catalane[i]);
  }

  return catalane[n];
}

let A = 2;

console.log("********");
console.log(catalane(A));
