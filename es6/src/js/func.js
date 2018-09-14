function log(x,y='world') {
	console.log(x + ' ' + y)
}
log("hello","china")
log("hello")

function foo({x,y = 5}) {
	console.log(x,y)
}
foo({});
let {x,y=2} = {x:4}
console.log(x,y)

function Point(x=0,y=0){
	this.x = x;
	this.y = y;
}

let point = new Point();
console.log(point);



