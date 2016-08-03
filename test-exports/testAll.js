
// Test Namespace Export
// var namespace_export = require('../namespace-export');
// console.log(namespace_export)
// namespace_export.sayHelloAsync(()=>console.log("Finished"));
// namespace_export.sayHello();

// Test Function export
// as the target module returns a function the module must be importedas
// var function_export = require(<MODULE_NAE>)(); check the () here
// if we leave that off then the exported function would not get executed and we will have nothing but a function
// var function_export = require('../function-export')('Abhishek');
// function_export.sayHello();
// var function_export1 = require('../function-export')('Dilli');
// function_export1.sayHello();


// Test higher order function export
// var higher_order_funciton_export = require('../higherorder-function-export')((greet)=>greet.toUpperCase());
// higher_order_funciton_export.sayHello('abhishek');


// Test constructor export
var Greet = require('../constructor-export');
var greetObj1 = new Greet('Name');
console.log(greetObj1);
console.log(greetObj1.privateGreet());
console.log(greetObj1.greet());

var greetObj2 = new Greet('ChangedName');
console.log(greetObj2);
console.log(greetObj2.privateGreet());
console.log(greetObj2.greet());

console.log(greetObj1);
console.log(greetObj1.privateGreet());
console.log(greetObj1.greet());

