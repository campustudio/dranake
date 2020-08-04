console.log('objcre.js');

// Object Literals: there is a drawback, just the one object,
// will end up copy-pasting the object's methods, data, and initialization if we need to create the same type of object in other places
// we need a way to create a family of objects
const o1 = {
  x: 11,
  y: 22,
  f() {},
  g() {},
};
console.log('o1: ', o1);

// Factory Functions: simplest way to create a family of objects that share the same structure, interface and implementation
// return an object from a function
// invoke the function when creation needed
// drawback: cause memory bloat, because each object contain its own unique copy of each function, ideally,
// we want every object to share just one copy of its functions
function Thing() {
  return {
    x: 11,
    y: 22,
    f() {},
    g() {},
  };
}
const o2 = new Thing();
console.log('o2: ', o2);

// Prototype Chains
// a built-in mechanism to share data across objects
// fulfill the access to some other object
// a better factory function that each object it creates contains only the data unique to that particular object
// and delegate all other property requests to a single, shared object

const ShipPrototype = {
  f() {},
  g() {},
};
function Ship() {
  var o = Object.create(ShipPrototype);
  o.x = 'what can you see';
  o.y = 'why do the white';

  return o;
}
const o3 = new Ship();
console.log('o3: ', o3);

// in fact, a prototype object is created for us automatically alongside every function
// we can put our shared data there
// drawback: the first and last lines of the angle function are going to be repeated
// almost verbatim in every such delegating-to-prototype factory function
angle.prototype.f = function () {}
angle.prototype.g = function () {}

function angle() {
  const o = Object.create(angle.prototype)
  o.x = 'journey'
  o.y = 'sun'

  return o
}

const o4 = angle();
console.log('o4: ', o4);

// ES5 Classes
// isolate the repetitive lines by moving them into their own function
// This function would create an object that delegates to some other arbitrary function’s prototype
// then invoke that function with the newly created object as an argument, and finally return the object
function create(fn) {
  const o = Object.create(fn.prototype)
  fn.call(o)

  return o
}

Glass.prototype.f = function () {}
Glass.prototype.g = function () {}

function Glass () {
  this.x = 'west'
  this.y = 'east'
}

const o5 = create(Glass)
console.log('o5: ', o5);

// drop-in replace create with new
// now arrived at what we commonly call “ES5 classes”
// object creation functions that delegate shared data to a prototype object and rely on the new keyword to handle repetitive logic
// drawback: verbose and ugly, implementing inheritance is even more verbose and ugly
Horizon.prototype.f = function() {};
Horizon.prototype.g = function() {};

function Horizon() {
  this.x = 42;
  this.y = 3.14;
}

var o6 = new Horizon();
console.log('o6: ', o6);

// ES6 Class
// offer a significantly cleaner syntax for doing the same thing
class Heart {
  constructor() {
    this.x = 42;
    this.y = 3.14;
  }

  f() {}

  g() {}
}

const o7 = new Heart();
console.log('o7: ', o7);