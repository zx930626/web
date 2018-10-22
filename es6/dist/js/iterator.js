"use strict";

function Obj(value) {
	this.value = value;
	// this.next = null
}
Obj.prototype[Symbol.iterator] = function () {
	var iterator = { next: next };
	var _this = this;
	function next() {
		if (_this) {
			var value = _this.value;
			_this = _this.next;
			return { done: false, value: value };
		} else {
			return { done: true };
		}
	}
	return iterator;
};

var a = new Obj(1);
var b = new Obj(2);
var c = new Obj(3);
a.next = b;
b.next = c;

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var i = _step.value;

		console.log(i);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}