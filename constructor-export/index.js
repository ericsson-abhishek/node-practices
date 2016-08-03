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
        return "Not shared variable has the value of ["+this.notSharedName+"] ,shared variable has the value of ["+sharedName+"]";
    }

    
}

// this funciton will be open for extension
Greet.prototype.greet  = function(){
     return "notSharedName has the value of ["+this.notSharedName+"] ,sharedName has the value of ["+sharedName+"]";
}
//variable which is not shared accross instances
Greet.prototype.notSharedName=this.notSharedName;

module.exports = Greet;