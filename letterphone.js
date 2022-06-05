let A = "23";
let mappings = {
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
function allCom(i, A, n, curr, mappings) {
  if (i === n) {
    ans.push(curr);
    return;
  }

  let allPossibilities = mappings[Number(A[i])];

  for (let j = 0; j < allPossibilities.length; j++) {
    allCom(i + 1, A, n, curr + allPossibilities[j], mappings);
  }
}

allCom(0, A, A.length, "", mappings);

console.log(ans);
