/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - this world that I live in
* 2. Implicit Binding - this thing I am attached to
* 3. Explicit Binding - I am borrowing this to use somewhere else.
* 4. New Binding - the new object created thanks to the Explicitly bound this from before
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globe() {
  this; // what is this? everything? Yes.
}

// Principle 2

// code example for Implicit Binding
const partOfTheWorld = function(info) {
  this.place = info.place || "forest";
  this.location = function() {
    return `I have a place in the world. My home is the ${this.place}`
  };
}

// Principle 3

// code example for Explicit Binding
partOfTheWorld.call(globe);

// Principle 4

// code example for New Binding
const home = new partOfTheWorld("Desert");
