//Exporting function also means exporting a Factory function.
// Instead of single shared instance, this way of exporting provides the caller with instancing the Module
// It happens because all variables are defined in a closure
// Following is the example of the same

// trying a variable use.
// this is possible but will break the non shared instance paradigm
// this variable state would be shared
var somevar = 'myvar'

// In this pattern module.exports must export a funciton that returns a JS Objects
// Here module.exports and exports can not be used interchangibly
// Here we must have to modify the default `exports` object of Node as it must be a function 
module.exports = function(inputArg)
{
    // assigning the local variable, it's not recomended as it will use the shared state
    somevar = inputArg;
    // the following is a private variable as we are not going to export it and its within the function
    var private_str = inputArg;
    return{
    // '=' would not work here as we are returing a JS object from the function   
        sayHello : ()=> console.log('Hi '+private_str+somevar),
        sayHelloAsync: (done)=>process.nextTick(()=>{this.sayHello();done();})
    }
}