/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var m = 1;
var n = 1;
var largest = 1;

for (m=1; m<1000; m++) {
  for (n=m; n<1000; n++) {
    var result = (m*n).toString();
    if (((result.split("")).reverse()).join("")==result && (m*n>largest)) largest = m*n;
  }
}
console.log(largest);

// 906609
