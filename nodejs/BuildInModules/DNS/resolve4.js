// The dns.resolve4() method is an inbuilt application programming interface of the dns module which is used to resolve IPv4 address (‘A’ record) for the specified hostname using DNS protocol.

// Syntax:

// dns.resolve4( hostname, options, callback )
// Parameters: This method accept three parameters as mentioned above and described below:

// hostname: This parameter specifies a string which denotes the hostname to be resolved.
// options: It is in the form of an object.
// ttl: It is a Boolean parameter specifies whether the Time-To-Live value (TTL) for each record to be retrieved or not. If set to true, TTL for each record is retrieved (in seconds).
// callback: It specifies a function to be called after DNS resolution of the hostname.
// error: It specifies error if generated.
// address: It is a string or object that signifies the returned IPv4 address(es) for the hostname.
// Return Value: This method returns error, address through callback function. These data are passed as parameters to the callback function.


// Node.js program to demonstrate the
// dns.resolve4() method

// Accessing dns module
const dns = require('dns');

// Calling dns.resolve4() method for hostname
// geeksforgeeks.org and display them in
// console as a callback
dns.resolve4('geeksforgeeks.org', (err,
	address) => console.log('address: %j', address));




// Setting options value for
// dns.resolve4() method
const options = {
	ttl: true,
};

// Calling dns.resolve4() method for hostname
// geeksforgeeks.org and displaying them
// in console as a callback
dns.resolve4('geeksforgeeks.org', options, (err,
	address) => console.log('address: %j', address));
