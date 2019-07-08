/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/
var group_a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var group_b = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var hundred = 'hundred';
var and = 'and';
var thousand = 'thousand';

var sum = 0;
for (var i=1; i<=1000; i++) {
  if (i==1000) {
    sum += (group_a[0] + thousand).length;
  } else {
    var hundreds = Math.floor(i/100);
    var hundred_reminder = i%100;
    var decimal_reminder = hundred_reminder%10;
    if (hundreds>0) sum += (group_a[hundreds-1] + hundred).length;
    if (hundred_reminder>0) {
      if (hundreds>0)sum += and.length;
      if (hundred_reminder<20) {
        sum += group_a[hundred_reminder-1].length;
      } else {
        var tens = Math.floor(hundred_reminder/10);
        sum += group_b[tens-1].length;
        if (decimal_reminder>0) sum+= group_a[decimal_reminder-1].length;
      }
    }
  }
}
console.log(sum);
        
// 21124
