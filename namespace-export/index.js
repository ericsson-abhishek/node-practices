//Exporting namespace corresponds to exporting a JS object from the module. Following is the example of the same
// here all modules which require this module would have access to a single shared JS object instance

// the following is a private variable as we are not going to export it
var private_str = "Abhishek"

// For a module this,exports and module.exports all point to the same object by default
// I could have also written the following as 
// `
//  module.expoprts = {
//  sayHello:()=> console.log('Hi '+private_str);
//  sayHelloAsync:(done)=>process.nextTick(()=>{this.sayHello();done();})
//  }
// `
// hoever doing this would have changed the default object being passed by Node for this module

exports.sayHello = ()=> console.log('Hi '+private_str); // same as module.exports.sayHello=...
exports.sayHelloAsync= (done)=>process.nextTick(()=>{this.sayHello();done();})// same as module.exports.sayHello=...