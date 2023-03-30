

// dns.lookupService( address, port, callback )
// Parameters: This method has three parameters as mentioned above and described below:

// address: It specifies a string which denotes the address to be resolved.
// port: It is a number that specifies the port number of the address whose service is to be resolved.
// callback: It specifies a function to be called after resolution of the address and port.
//      error: It specifies error if generated.
//      hostname: String representation of the hostname. e.g. geeksforgeeks.org
//      service: It’s a string, specifies name of the service. e.g. http
// Return Value: This method returns error, hostname and services through callback function. These data are passed as parameters to the callback function.



// example 1

// Accessing dns module
const dns = require('dns');

// Calling dns.lookupService() method for
// 127.0.0.1 port number 22
dns.lookupService('127.0.0.1', 22,
		(err, hostname, service) => {
		
	// Printing hostname and service as callback
	console.log(hostname, service);
});

// ex 2 



// Setting options for dns.lookup() method
const options = {
	
	// Setting family as 4 i.e. IPv4
	family: 4,
	hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('www.geeksforgeeks.org',
		options, (err, address, family) => {
	
	console.log('address:', address);
		if(err){
			console.log(err.stack);
		} else{

		// Calling dns.lookupService() method
		dns.lookupService(address, 80,
				(err, hostname, service) => {
			if(err){
				console.log(err.stack);
			}
			
			// Printing hostname and service
			// as callback
			console.log(hostname, service);
		});
	}
});
