/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var numero = 600851475143;
var ultimo_primo = 2;
for (var i=3; i<=Math.sqrt(numero); i+=2) {
  var j=2
  for (; i%j!=0 && j<=Math.sqrt(i); j++);
  if (j<=Math.sqrt(i)) continue;
  if (numero%i==0) ultimo_primo = i;
}
console.log(ultimo_primo);

// 6857
