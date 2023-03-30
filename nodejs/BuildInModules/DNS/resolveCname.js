// The dns.resolveCname() method is an inbuilt application programming interface of the dns module which is used to resolve CNAME records for the specified hostname using DNS protocol.

// Syntax:

// dns.resolveCname( hostname, callback )
// Parameters: This method has two parameters as mentioned above and described below:

// hostname: This parameter specifies a string which denotes the hostname to be resolved.
// callback: It specifies a function to be called after DNS resolution of the hostnames.
// error: It specifies error if generated.
// addresses: It is an array of string that signifies the returned cname addresses for the hostname.
// Return Value: This method returns error, addresses through callback function, These data are passed as parameters to the callback function.


// Node.js program to demonstrate the
// dns.resolveAny() method

// Accessing dns module
const dns = require('dns');

// Calling dns.resolveCname() method for hostname
// geeksforgeeks.org and displaying them in
// console as a callback
dns.resolveCname('geeksforgeeks.org', (err,
	addresses) => console.log('addresses: %j', addresses));
