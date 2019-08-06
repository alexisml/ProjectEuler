/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

function sum(op1, op2) {
  var res = [];
  var carry = 0;
  for (var i=0; i<Math.max(op1.length, op2.length); i++) {
    if (op1[i]!=null) carry += op1[i];
    if (op2[i]!=null) carry += op2[i];
    res.push(carry%10);
    carry = Math.floor(carry/10);
  }
  if (carry>0) res.push(carry);
  return res;
}

fibPrevious = [1];
fibLast = [1];
fibIndex = 2; // gibLast = F2

while (fibLast.length<1000) {
  var aux = fibLast;
  fibLast = sum(fibLast, fibPrevious);
  fibPrevious = aux;
  fibIndex++;
}

console.log(fibIndex);

// 4782
