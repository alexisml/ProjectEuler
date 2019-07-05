/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

RRDD - RDRD - RDDR - DRRD - DRDR - DDRR

How many such routes are there through a 20×20 grid?
*/

// (20+20)! / 20!*20!
var n = 1;
for (var i=40; i>20; i--) { n *= i; n /= (41-i); }
console.log(n);

// 137846528820
