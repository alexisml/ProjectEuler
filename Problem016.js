/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var inv_digits = [1];
for (var e=0; e<1000; e++) {
  var len = inv_digits.length;
  var accum = 0;
  var d;
  for (d=0; d<len; d++) {
    inv_digits[d] = inv_digits[d]*2 + accum;
    accum = Math.floor(inv_digits[d]/10);
    inv_digits[d] = inv_digits[d]%10;
  }
  if (accum>0) inv_digits[d] = accum;
}
var sum = 0;
for (var i=0; i<inv_digits.length; i++) sum += inv_digits[i];
console.log(sum);

// 1366
