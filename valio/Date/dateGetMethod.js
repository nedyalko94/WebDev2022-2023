//dataGetMethod

let result
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

result = new Date ().getFullYear() // 2022

const myNewDate = new Date();
result = months[myNewDate.getMonth()]; //  July
result = myNewDate.getDate() // 5  // The getDate() method returns the day of a date as a number (1-31):
result = myNewDate.getHours() // 23 (hour in number)
result = myNewDate.getMinutes() // The getMinutes() method returns the minutes of a date as a number (0-59):
result = myNewDate.getSeconds()  
result = myNewDate.getMilliseconds()      
 
const theDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // from 0 to 6 start from Sunday
const bgDay = [ "Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"]

result = theDay[myNewDate.getDay()]

//console.log(result)


// UTC date methods are used for working with UTC dates (Universal Time Zone dates)
// Method	            Description
// getUTCDate()	        Same as getDate(), but returns the UTC date
// getUTCDay()	        Same as getDay(), but returns the UTC day
// getUTCFullYear()	    Same as getFullYear(), but returns the UTC year
// getUTCHours()	    Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()  	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	    Same as getMonth(), but returns the UTC month
// getUTCSeconds()  	Same as getSeconds(), but returns the UTC seconds

//result =myNewDate.getUTCHours()

result = bgDay[myNewDate.getDay()]

result = myNewDate.toString() 

console.log(result) 
