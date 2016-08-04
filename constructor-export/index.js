// this variable will be shared accross instances
var sharedName;
function Greet  (inputArg)
{
    this.notSharedName = inputArg;
    // this variable with each instance creation
    sharedName=inputArg;

    // if Greet gets extended, this method would not be overridden
    this.privateGreet = function ()
    {
        return `notSharedName = ${this.notSharedName} ,sharedName = ${sharedName}`;
    }

    
}

// this funciton will be open for extension
Greet.prototype.greet  = function(){
     return `notSharedName = ${this.notSharedName} ,sharedName = ${sharedName}`;
}
//variable which is not shared accross instances
Greet.prototype.notSharedName=this.notSharedName;

module.exports = Greet;