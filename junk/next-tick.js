// console.log("log first");

// setTimeout(()=>console.log("set time out 1"),0);
// console.log("log last");
// console.log("log last");

// process.nextTick(function(){
//     console.log("calling next tick 1");
// });

// process.nextTick(function(){
//     console.log("calling next tick 2");
// });
// console.log("log last");
// setTimeout(()=>console.log("set time out 2"),0);
// console.log("log last");

// var someVar =  ()=> setTimeout(()=>{console.log("Printing settimeout");
// process.nextTick(()=>console.log("nexttick inside  settimeout"));
// } ,0)

// someVar();

// //trying to invoke the call back after setTimeout
// var testFunction = (myfunction)=>
// setTimeout(function() {
//     process.nextTick(myfunction);
// }, 0);

// var c= ()=>
// {
//     testFunction(()=>console.log("callback"));
//     process.nextTick(()=>console.log("callback 2"));
// }
// c();

// var module1= require
// console.dir(module1);