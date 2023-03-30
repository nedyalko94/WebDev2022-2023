// The dns.resolveAny() method is an inbuilt application programming interface of the dns module which is used to resolve all records (i.e. ‘ANY’ or ‘*’) for the specified hostname using DNS protocol.

// Syntax:

// dns.resolveAny( hostname, callback )
// Parameters: This method has two parameters as mentioned above and described below:

// hostname: This parameter specifies a string which denotes the hostname to be resolved.
// callback: It specifies a function to be called after DNS resolution of the hostnames.
// error: It specifies error if generated.
// ret: It is an object that signifies the returned records for the hostname.
// Return Value: This method returns error, records through callback function. These data are passed as parameters to the callback function.


// A: IPv4 address
// AAAA: IPv6 address
// ANY: Any records
// CNAME: canonical name records
// MX: mail exchange records
// NAPTR: name authority pointer records
// NS: name server records
// PTR: pointer records
// SOA: start of authority records
// SRV: service records
// TXT: text records


// Node.js program to demonstrate the
// dns.resolveAny() method

// Accessing dns module
const dns = require('dns');

// Calling dns.resolveAny() method for
// hostname geeksforgeeks.org and displaying
// them in console as a callback
dns.resolveAny('geeksforgeeks.org', (err,
	records) => console.log('records: %j', records));

    dns.resolveAny('localhost', (err,
        records) => console.log('localhost: %j', records));