//Exporting higher order function is also similar to exporting a function.
// But it takes a function as an argument, on which the returned object of the exported function will depend
// Following is the example of the same


// Here module.exports and exports can not be used interchangibly
// Here we must have to modify the default `exports` object of Node as it must be a function 
// This pattern is very useful when chaining is requried like express's app.use(req,res,next)
// it uses higher order function on next()
module.exports = function(strategy)
{
   
    
    return{ 
    // '=' would not work here as we are returing a JS object from the function   
        sayHello : (tobeGreeted)=> {
            console.log('Hi '+ strategy(tobeGreeted))
        }
    }
}