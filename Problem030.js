/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

function digitFifthPowers(number) {
  var sum = 0;
  while(number >= 10) {
    sum += Math.pow(number%10, 5);
    number = Math.floor(number/10);
  }
  sum += Math.pow(number%10, 5);
  return sum;
}

var largest = 0;
for (largest=9; digitFifthPowers(largest)>largest; largest = (largest*10) +9);

var accum = 0;
for (var i=10; i<=largest; i++) {
  if (i==digitFifthPowers(i)) accum += i;
}

console.log(accum);
// 443839
