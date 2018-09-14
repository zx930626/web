'use strict';

var _templateObject = _taggedTemplateLiteral(['<p>', ' has send you a message.</p>'], ['<p>', ' has send you a message.</p>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sender = '<script>alert(23);</script>';
var message = saferHTML(_templateObject, sender);

function saferHTML(temp) {
	var s = temp[0];
	for (var i = 0; i < arguments.length; i++) {
		var arg = String(arguments[i]);
		s += arg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		s += temp[i];
	}
	return s;
}
console.log(message);