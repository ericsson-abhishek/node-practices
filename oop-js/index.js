// object inheritance
var Vehicle = function (name)
{
    this.name = name;
    this.nameUpper = name.toUpperCase();
    // this.start= function()
    // {
    //     return this.name+" is starting";
    // }
}

Vehicle.prototype.start= function()
{
    return this.name+" is starting";
}
/*
    When new Vehicle() is called, JavaScript does four things:

    1. It creates a new object.
    2. It sets the constructor property of the object to Vehicle.
    3. It sets up the object to delegate to Vehicle.prototype.
    4. It calls Vehicle() function in the context of the new object.-- constructor invocation happens here

    The result of new Vehicle() is this new object.
*/
var veh1 = new Vehicle('Small SUV');
console.log("the constructor:"+veh1.constructor);// the Vehicle function
console.log(veh1.constructor == Vehicle);  // true
console.log(veh1 instanceof Vehicle);      // true
console.dir(veh1.__proto__);               // Vehicle.prototype



var veh2 = new Vehicle('Large SUV');
console.log(veh1.start());
console.log(veh2.start());
var Car = function(name)
{
    Vehicle.call(this,name);
    console.dir(this.__proto__);
    console.log(this.start()+'==>>');
    
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.start = function()
{
    return this.nameUpper+" Car is starting";
}
var car1 = new Car('Small');
console.log(car1 instanceof Vehicle)
console.log(car1.start());
var car2 = new Car('Huge');
console.log(car2 instanceof Vehicle)
console.log(car2.start());
console.log(car1.start());
console.log((new Vehicle("truck")).start());

var Maruti = function(model,name)
{
    Car.call(this,name);
    this.model = model;
}

Maruti.prototype=Object.create(Car.prototype);
Maruti.prototype.start = function()
{
    return "Maruti with model "+this.model+" and name " +this.nameUpper+" Car is starting";
}

var dZire = new Maruti('Dzire',"swift");
console.log(dZire.start());