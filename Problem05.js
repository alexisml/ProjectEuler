/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var divisible = false;
var n = 20;
var i = 2;
for (; !divisible; n+=20) {
  for (i=2; n%i==0 && i<=20; i++);
  divisible = i>20;
  if (divisible) console.log(n);
}

// 232792560
