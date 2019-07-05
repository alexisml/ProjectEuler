/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var found = false;
for (var a=1; !found && a<1000; a++) {
  for (var b=1; !found && b<1000; b++) {
    for (var c=1; !found && c<1000; c++) {
      if (a+b+c!=1000) continue;
      if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        found = true;
        console.log(a*b*c);
      }
    }
  }
}

// 31875000
