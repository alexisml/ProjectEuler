/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

function isNotEmpty(y, x) {
  return matrix[y]!=null && matrix[y][x]!=null;
}
function isEmpty(y, x) {
  return !isNotEmpty(y, x);
}
var size = 1001;
var matrix = [];
for (var i=0; i<size; i++) matrix[i] = [];
var x = Math.floor(size/2);
var y = Math.floor(size/2);
var last = 1;
matrix[y][x] = last;
while(x!=(size-1) || y!=0) {
  if (isNotEmpty(y, x-1) && isEmpty(y+1, x)) {
    // Go down
    y++;
  } else {
    if (isNotEmpty(y-1, x) && isEmpty(y, x-1)) {
      // Go left
      x--;
    } else {
      if (isNotEmpty(y, x+1) && isEmpty(y-1,x)) {
        // Go up
        y--;
      } else {
        // Go right
        x++;
      }
    }
  }
  last++;
  matrix[y][x] = last;
}  

var sum = 0;
for (var i=0; i<size; i++) {
  sum += (i != size-1-i) ? matrix[i][i] + matrix[i][size-1-i] : matrix[i][i];
}

console.log(sum);
// 669171001
