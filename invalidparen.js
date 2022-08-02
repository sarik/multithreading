let A = "()())()";
A = "(a)())()";

let ans = [];

/*function validParenthesis(A, n, i, left, right, curr) {
  if (i === n) {
    if (left === right) ans.push([...curr].join(""));
    return;
  }

  if (A[i] === ")" && left === right) {
    validParenthesis(A, n, i + 1, left, right, curr);
  } else if (A[i] === "(") {
    curr.push("(");
    validParenthesis(A, n, i + 1, left + 1, right, curr);
    curr.pop();
  } else if (A[i] === ")") {
    curr.push(")");
    validParenthesis(A, n, i + 1, left, right + 1, curr);
    curr.pop();
  } else {
    curr.push(A[i]);
    validParenthesis(A, n, i + 1, left, right, curr);
    curr.pop();
  }
}*/

let map = new Map();

function validParenthesis(A, n, i, left, right, curr, missed) {
  if (right > left) return;
  if (i === n) {
    if (left === right) {
      console.log(
        [...curr].join(""),
        ans,
        ans.length > 0 ? A.length - ans[ans.length - 1].length : A.length,
        missed
      );
      if (ans.length === 0) {
        map.set([...curr].join(""), 1);
        ans.push([...curr].join(""));
      } else {
        let prevMissed = A.length - ans[ans.length - 1].length;

        if (prevMissed > missed) {
          ans.pop();
          ans.push([...curr].join(""));
          map.set([...curr].join(""), 1);
        } else if (prevMissed === missed) {
          if (!map.has([...curr].join(""))) {
            map.set([...curr].join(""), 1);
            ans.push([...curr].join(""));
          }
        }
      }
    }
    return;
  }

  if (A[i] === "(") {
    curr.push("(");
    validParenthesis(A, n, i + 1, left + 1, right, curr, missed);
    curr.pop();
    //miss the (
    validParenthesis(A, n, i + 1, left, right, curr, missed + 1);
  } else if (A[i] === ")") {
    curr.push(")");
    validParenthesis(A, n, i + 1, left, right + 1, curr, missed);
    curr.pop();
    validParenthesis(A, n, i + 1, left, right, curr, missed + 1);
  } else {
    curr.push(A[i]);
    validParenthesis(A, n, i + 1, left, right, curr, missed);
    curr.pop();
  }
}

validParenthesis(A, A.length, 0, 0, 0, [], 0);

console.log(ans);
