/*
Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?
*/

function pentagonal(n) {
  return (n*(3*n-1))/2;
}

function isPentagonal(n) {
  /* 
  (n*(3*n-1)) = 2*a
  3*n^2 - n = 2*a
  3*n^2 - n - 2*a = 0
  1 +- sqrt(1+4*3*2) / 2*3
  */
  // Bhaskara 
  var aux = Math.sqrt(1+(24*n));
  var sol = (1 + aux) / 6; // The other solution gives negative
  return (sol==Math.floor(sol));
}

var max = 100000000;
var min_dif = 100000000;
for (var i=1; i<max-1; i++) {
  var a = pentagonal(i);
  for (var j=i+1; j<max; j++) {
	var b = pentagonal(j);
	if ((b-a) > min_dif) break;
    if (isPentagonal(a+b) && isPentagonal(b-a)) {
	  if ((b-a)<min_dif) min_dif = (b-a);
      console.log("i=" + i + ",j=" + j + ",a=" + a + ",b=" + b + ",dif=" + (b-a));
    }
  }
}

console.log(min_dif);
// 5482660
