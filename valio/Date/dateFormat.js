
// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"
 
//he ISO format follows a strict standard in JavaScript.
 
 result = new Date("2022-5-15") // 2022-05-14T22:00:00.000Z

 result = new Date ("2010-10")

 result = new Date("2021")  

 //JavaScript Short Dates.

 result = new Date ( "03/05/21") // 2021-03-04T23:00:00.000Z
 result = new Date("Mar 25 2015") // 2015-03-24T23:00:00.000Z

 //Date.parse() returns the number of milliseconds between the date and January 1, 1970:
 result = Date.parse("March 21, 2012"); // 1332284400000

let msec = Date.parse("March 21, 2012") // convert to number
result = new Date(msec) // convert back to time
 console.log(result)

 