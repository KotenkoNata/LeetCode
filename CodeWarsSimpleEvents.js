// Task - https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript

function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (handler) {
  this.handlers.push(handler);
}

Event.prototype.unsubscribe = function (handler) {
  this.handlers.splice(this.handlers.indexOf(handler), 1);
}

Event.prototype.emit = function (...arguments) {
  let args = arguments;

  this.handlers.forEach(function (handler) {
    handler.apply(null, args);
  })

}


let event = new Event();

function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
event.emit(1, 'foo', true);

console.log(f.calls === 1); // calls a handler
console.log(f.args, [1, 'foo', true]); // passes arguments

event.unsubscribe(f);
event.emit(2);

console.log(f.calls === 1); //no second call