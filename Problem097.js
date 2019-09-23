/*
The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 26972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×2^7830457+1.

Find the last ten digits of this prime number.
*/

function sum(arr1, arr2) {
  while(arr1.length>arr2.length) arr2.push(0);
  while(arr2.length>arr1.length) arr1.push(0);
  var carry = 0;
  for (var i=0; i<arr1.length; i++) {
    arr1[i] += carry + arr2[i];
    carry = Math.floor(arr1[i]/10);
    arr1[i] = arr1[i]%10;
  }
  if (carry>0) arr1[arr1.length] = carry;
  return arr1;
}

function multiply(arr1, arr2) {
  var ret = [];
  for (var i=0; i<arr2.length; i++) {
    var res = [];
    var carry = 0;
    for (var j=0; j<arr1.length; j++) {
      res[j] = carry + arr1[j]*arr2[i];
      carry = Math.floor(res[j]/10);
      res[j] = res[j]%10;
    }
    if (carry>0) res[res.length] = carry;
    for (var j=0; j<i; j++) res.unshift(0);
    ret = sum(ret, res);
    truncateTen(ret);
  }
  return ret;
}

function truncateTen(arr) {
  while(arr.length>10) arr.pop();
}

var current = [1];
for (var i=0; i<7830457; i++) {
  current = multiply(current, [2]);
}
current = multiply(current, [3,3,4,8,2]);
current = sum(current, [1]);

console.log(current.reverse().join(""));

// 8739992577
