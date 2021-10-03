

let map = {one: true, two: true, hasOwnProperty: true};

const hasOwnProperty = Symbol("hasOwnProperty");

Object.prototype[hasOwnProperty] = function(x) {

  return Object.keys(this).indexOf(x) != -1;
};

console.log(map[hasOwnProperty]("one"));
