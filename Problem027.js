/*
Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

function isPrime(number) {
  if (number<2) return false;
  for (var i=2; i<=Math.sqrt(number); i++) {
    if (number%i==0) return false;
  }
  return true;
}
function quadraticFormula(a, b, n) {
  return (n*n)+(a*n)+b;
}

var a;
var b;
var longestConsecutivePrimes = 0;
var product = 0;

for (a=-999; a<1000; a++) {
  if (a==0) continue;
  for (b=2; b<1000; b++) {
    number = b;
    var i;
    for (i=1; isPrime(number); i++) number = quadraticFormula(a, b, i);
    if (i>longestConsecutivePrimes) {
      longestConsecutivePrimes = i;
      product = a*b;
    }
  }
}

console.log(product);
// -59231
    
