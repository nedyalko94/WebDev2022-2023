




// dns 
// dns.lookup( hostname, options, callback )
const dns = require('dns')

const website = "google.com"

dns.lookup(website,(err,address,family)=>{
    console.log(
        'address of %s is %j family: IPv%s', 
           website, address, family);
})




// Call to reverse function along with lookup function.
dns.lookup('www.geeksforgeeks.org',
	function onLookup(err, address, family) {
	// console.log('address:', address);
	dns.reverse(address, function (err, hostnames) {
	// console.log('reverse for ' + address + ': '
	// 		+ JSON.stringify(hostnames));
    
});
});

// Execute using $ node <filename>


// with options 

const options = {
      
    // Setting family as 6 i.e. IPv6
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('geeksforgeeks.org', options, (err, address, family) =>
        console.log('address: %j family: IPv%s', address, family));


		const option2 = {
			all:true,
		};
		  
		// Calling dns.lookup() for hostname
		//  geeksforgeeks.org and displaying
		// them in console as a callback
		dns.lookup('geeksforgeeks.org', option2, (err, addresses) =>
				console.log('addresses: %j', addresses));


console.log(dns.getServers()); // return array of server ip's




