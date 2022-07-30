let A = "10";
let map = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

let ans = [];
function giveCombination(curr, i, A) {
  if (i === A.length) {
    console.log([...curr].join(""), "one");
    ans.push([...curr].join(""));
    return;
  }

  let currPossibleCombinations = map[A[i]];
  for (let j = 0; j < currPossibleCombinations.length; j++) {
    curr.push(currPossibleCombinations[j]);
    giveCombination(curr, i + 1, A);
    curr.pop();
  }
}

giveCombination([], 0, A);
console.log(ans);
