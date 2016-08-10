console.log('Hello World');//global namespace
global.console.log('Hello World');//same as console.log

globalVar = 'globalVar';//global scope
var a = 17;//local scope
console.log(a)//17
console.log(this.a);// undefined as a is in local scope and this referes module scope.
module.exports.a = a;// a is now in module scope
console.log(this.a);// 17 as a is in module scope and this referes module scope.
console.log(this.globalVar);// undefined as globalVar is in global scope and this referes module scope.

function testFunction(){
  console.log('in testFunction module scope variable a : '+this.a)//module scope variable
  console.log('in testFunction global scope variable globalVar : '+this.globalVar);//global scope variable
};
console.log('========testFunction will be called in global scope===========');
testFunction(); //calling this way function is called in global scope.

console.log('========testFunction will be called in module scope===========');
testFunction.call(this);

module.exports.testFunction = testFunction;
console.log('========testFunction will be called in module scope===========');
this.testFunction(); //calling this way function is called in module scope.

/*
 Add relevant commnets here
*/

function User(){
 var name= "";
 this.showName = function showName(){
  console.log('My name is : '+this.name);
 }
};

var abhi = new User();
abhi.name = 'abhi';
abhi.showName();
