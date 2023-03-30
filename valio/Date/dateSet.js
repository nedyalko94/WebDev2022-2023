// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

let result = new Date();
result.setFullYear(2020); // The setFullYear() method sets the year of a date object. In this example to 2020:

result.setFullYear(2020,11,4); // optional  // 2020-12-03T23:38:33.897Z

result.setHours(15) //2020-12-04T14:39:29.035Z


result = new Date();
result.setDate(result.getDate() + 5); // set the date 5 day later than today 
console.log(result)
