/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

function calculateH(a, b) {
  var h = Math.sqrt(a*a+b*b);
  return (h==Math.floor(h)) ? h : 0;
}

var max_num = 0;
var max_p = 0;
for (var p=1; p<=1000; p++) {
  var current_count = 0;
  for (var a=1; a<p-1; a++) {
    for (var b=a; b<p; b++) {
      var h = calculateH(a, b);
      if (h>0 && a+b+h==p) current_count++;
    }
  }
  if (current_count>max_num) {
    max_num = current_count;
    max_p = p;
  }
}

console.log(max_p);
// 840
