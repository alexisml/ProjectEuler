/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

function multiply(ar, di) {
  var ac = 0;
  var re = [];
  for (var i=0; i<ar.length; i++) {
    re[i] = (ar[i]*di) + ac;
    ac = re[i]>0 ? Math.floor(re[i]/10) : 0;
    re[i] = re[i]%10;
  }
  if (ac>0) re[re.length] = ac;
  return re;
}

var result = [1];
for (var i=1; i<100; i++) {
  var tens = Math.floor(i/10);
  var digits = i%10;
  var byDigits = multiply(result, digits);
  if (tens>0) {
    var byTens = multiply(multiply(result, tens), 10);
    var accum = 0;
    var max = Math.max(byDigits.length, byTens.length);
    for (var i=0; i<max; i++) {
      result[i] = accum;
      if (byDigits[i]) result[i] += byDigits[i];
      if (byTens[i]) result[i] += byTens[i];
      accum = result[i]>0 ? Math.floor(result[i]/10) : 0;
      result[i] = result[i]%10;
    }
    if (accum>0) result[max] = accum;
    console.log(accum);
  } else {
    result = byDigits;
  }
}

var sum = 0;
for (var i=0; i<result.length; i++) sum += result[i];
