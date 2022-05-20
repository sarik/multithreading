let A = 3;

function genAllSeq(question, left, right, i, curr) {
  if (i === question * 2) {
    if (left === right) console.log(curr);
    return;
  } else if (right > left) {
    return;
  }

  genAllSeq(question, left + 1, right, i + 1, curr + "(");
  genAllSeq(question, left, right + 1, i + 1, curr + ")");
}

genAllSeq(A, 0, 0, 0, "");
