// this variables are declared in local scope
var a= 9;
var b=90;

console.log(a); // 9
console.log(b); // 90
function simpleFunction()
{
    console.log(`a=${a}, b=${b}`);
}
simpleFunction();// all local so would print 9,90


console.log(this.a); // undefined as a is in local scope and this refers to module scope
function someFunciton () {
    console.log(this.a);
}

someFunciton();// undefined as a is not in Global scope (in this call someFunction get executed on Global Scope)
someFunciton.call(this);// undefined as a is not there in module scope

module.exports.a = a; // adding a in module's scope
someFunciton();// undefined as a is not in Global scope (in this call someFunction get executed on Global Scope)
someFunciton.call(this);

module.exports.someFunciton = someFunciton;
this.someFunciton(); // 9 as a is now in Module scope (in this call someFunction get executed on Module Scope)

