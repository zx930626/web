function Obj (value) {
	this.value = value;
	// this.next = null
}
Obj.prototype[Symbol.iterator] = function(){
	var iterator = {next:next};
	var _this = this;
	function next() {
		if (_this) {
			var value = _this.value;
			_this = _this.next;
			return {done:false,value:value}
		}else{
			return {done:true}
		}
	}
	return iterator
};

var a = new Obj(1);
var b = new Obj(2);
var c = new Obj(3);
a.next = b;
b.next = c;

for (var i of a) {
	console.log(i)
}