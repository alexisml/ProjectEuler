/*
The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
*/

var lastDigits = 0;
for (var n=1; n<=1000; n++) {
  var toSum = 1;
  for (var i=0; i<n; i++) toSum = (toSum * n)%10000000000
  lastDigits = (lastDigits + toSum)%10000000000;
}

console.log(lastDigits);
// 9110846700
