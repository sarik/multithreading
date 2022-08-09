let input = "";
let desired = ["", "", ""];

let ans = Number.MAX_VALUE;

function returnMinBreak(input, desired, currans, i) {
  if (input === desired) return 0;

  if (desired.contains(substringtillnow)) {
    //

    //right side taking the current match
    ans = Math.max(currans, returnMinBreak(restofstring, desired) + 1);
  }

  return ans;
}

returnMinBreak(input, desired, curr);
