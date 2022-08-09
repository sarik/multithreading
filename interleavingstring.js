let A = "B";
let B = "e";
let C = "Be";

A = "noUdRp97xFvpifeSXGwOjcVNhHo9N2D";
B = "6iZItw9A3fj86uYx04tvWKLtl9BK";
C = "n6ioUdRpZ97ItwxF9Av3fj86upYxif0eS4XtvWKLtlG9wOBKjcVNhHo9N2D";

/*A = "ab";
B = "cd";
C = "acbd";*/
let ans = false;

//solution with backtraking
//Solution with less TC possible with DP
function calCulateString(clength, A, B, n, m, i, j, curr, C) {
  //shortcircuit
  if (C.substring(0, [...curr].length) !== [...curr].join("")) {
    return;
  }
  if ([...curr].length === clength) {
    //console.log([...curr].join(""));
    //console.log(i, "::", j, [...curr], "here", n, [...curr]);
    //console.log([...curr].join(""));
    if ([...curr].join("") === C) {
      //console.log([...curr].join(""));
      ans = true;
    }
    return;
  }

  let cpy1 = [...curr];
  let cpy2 = [...curr];

  if (i < n) {
    cpy1.push(A[i]);
    //console.log([...curr]);
    calCulateString(clength, A, B, n, m, i + 1, j, cpy1, C);
    //curr.pop();
  }
  if (j < m) {
    //console.log([...curr]);
    cpy2.push(B[j]);
    calCulateString(clength, A, B, n, m, i, j + 1, cpy2, C);
  }
}

calCulateString(C.length, A, B, A.length, B.length, 0, 0, [], C);

console.log(ans);
