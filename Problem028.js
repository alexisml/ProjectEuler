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

var matrix = [];
for (var i=0; i<5; i++) matrix[i] = [];
var x = Math.floor(5/2);
var y = Math.floor(5/2);
var last = 1;
matrix[y][x] = last;
while(x!=4 && y!=0) {
  if (matrix[y] && matrix[y][x-1]) {
    // Go down
    y++;
  } else {
    if (matrix[y-1] && matrix[y-1][x]) {
      // Go left
      x--;
    } else {
      if (matrix[y] && matrix[y][x+1]) {
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
