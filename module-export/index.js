var util = require('util')
module.exports.firstFunction = function(){
    console.log("logging this from the first function :"+util.inspect(this));
    console.log("simple function is invoked someVar = "+ this.someVar+" & "+ ++myvar);
}
module.exports.secondFunction = function(){
    console.log("second function is invoked someVar = "+ this.first_module.someVar +" & "+ ++myvar);
}

var myvar=0;

function thirdFunction ()
{
    console.log("third function is invoked someVar = "+ this.someVar +" & "+ ++myvar);
}


console.log("----"+util.inspect(exports))
exports = {};
module.exports.someVar = myvar;
module.exports.thirdFunction = thirdFunction;
console.log("--------------"+util.inspect(exports)+"--------------")