/*
You are given the following information, but you may prefer to do some research for yourself.

  - 1 Jan 1900 was a Monday.
  - Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
  - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

// This could be easily done by using Date object

var days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var day_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var count = 0;
var year = 1900;
var month = 1;
var day = 1;
var day_of_week = 0; // Index from day_of_week 
while (year < 2001) {
  if (year>=1901 && day==1 && day_of_week==6) count++;
  day++;
  day_of_week = (day_of_week+1)%7;
  if (day>days_per_month[month-1]) {
    if (month==2) {
      if (day>29) { day = 1; month++; }
      else { if (year%4!=0 || (year%100==0 && year%400!=0)) { day = 1; month++; }}
    } else {
      day = 1; 
      month++;
    }
  }
  if (month>12) { month=1; day=1; year++; }
}
console.log(count);

// 171
