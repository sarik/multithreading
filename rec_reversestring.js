function reverseString(s) {
  if (s === "") return "";
  if (s.length === 1) return s;

  let rest = s.substring(1, s.length);
  let firstElement = s[0];
  return reverseString(rest) + firstElement;
}

console.log(reverseString("scaleracademy"));
