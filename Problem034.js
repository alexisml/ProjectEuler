/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function factorial(number) {
  if (number<=1) return 1;
  return number*factorial(number-1);
}

function digitsFactorial(number) {
  var sum = 0;
  while (number > 0) {
    sum += factorial(number%10);
    number = Math.floor(number/10);
  }
  return sum;
}

// Find limit
var limit;
for (limit=99; limit<digitsFactorial(limit); limit = (limit*10)+9);

// Calculate every number and sum
var sum = 0;
for (var i=3; i<=limit; i++) if (i==digitsFactorial(i)) sum += i;

console.log(sum);
// 40730
