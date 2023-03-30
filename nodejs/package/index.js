/*
package.json

npm init -y
nom --yes

npm init

What ? 
    package.json is npm's config file
    it is a json file that typically lives in the root directory of your package and holds 
    various metadata relevant to the package
Why 
package.json is the central place to config and describe how to interact with and run your package 

it is primarily used by the npm CLI

npm i upper-case

for uninstall 

npm uninstall upper-case

CLi scan and install all package
    npm i 

we can install exact version 
    npm install ThePackageName@2.0.0

latest version
    npm install ThePackageName 


  Semantic Versioning 
    SemVer - is one of the most widely adopted versioning systems 
    A simple set of rules and requirements that dictate how version numbers are 
    assigned and incremented
    
    It is crucial to keep a semantic and historical track of changes

    Version numbers and the way they change convey meaning about the
     underlying code and what has been modified from one version to the next

     o.y.z

     o -is major version
     y - is minor version
     z-  is patch

     when you fix a bux is a patch  1.1.1 to 1.1.2

     when you add new functionality but the code still stay backwards-compatible
     you increment the minor version
     you also reset the patch version to zero

     for example 1.1.1 to 1.2.0

     when you make changes and the code is no more backwards compatible , you increment the major version
     you have to reset the minor and patch version to zero

     for example 1.1.1 to 2.0.0

Few more point

     semantic versioning alway starts with 0.1.0 -// never start with patch

    O.Y.Z ( a major version of zero ) is used for initial development 
    When the code is production-ready , you increment to version 1.0.0
    Even the simplest of changes has to be done with an increse in the version number


*/

const upperCase = require("upper-case").upperCase;
function greet(name){
    console.log(  upperCase(`Hello ${name}, welcome to my custom Package`)  )
}
greet("ned")
module.exports= greet