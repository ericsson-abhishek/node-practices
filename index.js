// local variable
var first_module=require('./first-module')
console.log(first_module)
first_module.firstFunction();
first_module.thirdFunction();


var sec_function = require('./first-module').secondFunction;
console.log(sec_function);
//sec_function();

console.log("=="+this);
console.log("=="+ first_module.someVar);


var local = function localFunction()
{
    console.log("local =="+this);
    console.log("local =="+first_module.someVar);
}

var tooLocal = function()
{
    console.log("local =="+this);
    console.log("local =="+first_module.someVar);
}

local();
try{this.tooLocal();} catch(e) {console.error("invocation of this.toLocal() threw error")}

console.log("=="+local);
/*
Q. How do require work?
On a very high level as it seems the require provides a feature to dynamically loading functionality into the process space.

Internally -
Module is a core module within Node which brings into action in this  context.
require is an abstraction on module.require which wraps the functionality of Module._load.
Steps of _load:
1. First it would check whether the required module is already available in the cache. So everytime we call require its not going to do a DISK I/O.
However DISK I/O would happen for the first time when the require is called.
2. If cache miss then create a new module instance.

3. Save it to cache.
4. call load with the given fileName. Here there would be a DISK I/O
    Loading a module is interesting
    let's say we have written something like
    var myModule= require('./myModule')
     - it would result in searching myModule file in the directory
     - myModule.js in the directory
     - myModule.json in the directory
     - myModule as a sub-directory within the directory ( and if yes then load index.js within the sub-directory).
      in my case i am loading first-module module as a folder
5. Compile the file contents
6. if there was any error remove the corresponding cache entry
7. Return module.exports



*/