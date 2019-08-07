/*
The decimal number, 585 = 1001001001(2) (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function isPalindromic(str) {
  for (var i=0; i<(str.length/2); i++) if (str[i]!=str[str.length-1-i]) return false;
  return true;
}

var sum = 0;
for (var n=1; n<1000000; n++) {
  if (isPalindromic(n.toString()) && isPalindromic(n.toString(2))) sum += n;
}

console.log(sum);
// 872187
