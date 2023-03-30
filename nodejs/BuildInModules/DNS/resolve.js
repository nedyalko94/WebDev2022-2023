


// The dns.resolve() method is an inbuilt application programming interface of the dns module which is used to resolve hostname into an array of the resource records.

// dns.resolve( hostname, rrtype, callback )


// Parameters: This method accept three parameters as mentioned above and described below:

// hostname: This parameter specifies a string which denotes the hostname to be resolved.
// rrtype: It specifies the resource record type. Its default value is ‘A’. 
// The list of records (‘A’, ‘AAAA’, ‘ANY’, ‘CNAME’, ‘MX’, ‘TXT’, ‘NS’, ‘NAPTR’, ‘PTR’, ‘SOA’, ‘SRV’) are described below:

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
// callback: It specifies a function which to be called after DNS resolution of the hostname.
// error: It specifies error if generated.
// records: It’s string or object that signifies the returned record.
// Return Value: This method returns error, records through callback function, These data are passed as parameters to the callback function.


// Node.js program to demonstrate the
// dns.resolve() method

// Accessing dns module
const dns = require('dns');

// Set the rrtype for dns.resolve() method
const rrtype="A";

// Calling dns.resolve() method for hostname
// geeksforgeeks.org and print them in
// console as a callback
dns.resolve('geeksforgeeks.org', rrtype, (err, records)=> 
console.log('records: %j', records)
);


