'use strict';

function log(x) {
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

	console.log(x + ' ' + y);
}
log("hello", "china");
log("hello");

function foo(_ref) {
	var x = _ref.x,
	    _ref$y = _ref.y,
	    y = _ref$y === undefined ? 5 : _ref$y;

	console.log(x, y);
}
foo({});
var _x2 = { x: 4 },
    x = _x2.x,
    _x2$y = _x2.y,
    y = _x2$y === undefined ? 2 : _x2$y;

console.log(x, y);

function Point() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	this.x = x;
	this.y = y;
}

var point = new Point();
console.log(point);