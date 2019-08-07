/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

var latest_number = 1;
var latest_partial_number = "";
var count_digits = 1;

var product = 1;
for (var i=2; count_digits<1000000; i++) {
  var current_digit;
  if (latest_partial_number.length==0) {
    latest_number++;
    latest_partial_number = latest_number.toString();
  }
  current_digit = latest_partial_number[0];
  latest_partial_number = latest_partial_number.substring(1);
  count_digits++;
  if (count_digits==10 || 
    count_digits==100 || 
    count_digits==1000 || 
    count_digits==10000 || 
    count_digits==100000 || 
    count_digits==1000000) product *= parseInt(current_digit);
}

console.log(product);
// 210
