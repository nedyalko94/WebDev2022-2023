

const add = require('./myModule/add')
require('./myModule/add')


// every module have own scope so variable superhero don't conflict
require('./myModule/batman')
require('./myModule/superman')
//

console.log('hello world')
console.log(add(2,3))
console.log(add(4,3)) 