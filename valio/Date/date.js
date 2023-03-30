// date 


// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)


let result = new Date("October 13, 2014 11:13:00")

result= new Date (2018, 5, 35, 10, 33, 30)

result = new Date (2018,5)

// month start from 0 (january) so 11 max (december)
result= new Date(2018, 11, 24, 10, 33, 30, 0)

// new Date(milliseconds)

result = new Date (1000000000000) // this is 2001-09-09T01:46:40.000Z

result = new Date().toString()   // Tue Jul 05 2022 20:09:49 GMT+0200 (Централноевропейско лятно часово време)

result = new Date().toUTCString()  // Tue, 05 Jul 2022 18:12:08 GMT    // 2 hour behind 

result = new Date().toDateString() // Tue Jul 05 2022


console.log(result)
