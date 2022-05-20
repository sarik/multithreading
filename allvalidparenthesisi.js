let question = "(())(())))";

function genAllSeq(question, left, right, i, curr) {
  if (i === question.length) {
    return;
  } else if (right > left) {
    return;
  }

  if (left === right) {
    console.log(curr);
    //genAllSeq(question, left, right, i, "");
  }
  if (question[i] === "(") {
    genAllSeq(question, left + 1, right, i + 1, curr + "(");

    genAllSeq(question, 1, 0, i + 1, "(");
  } else genAllSeq(question, left, right + 1, i + 1, curr + ")");
}

genAllSeq(question, 0, 0, 0, "");
