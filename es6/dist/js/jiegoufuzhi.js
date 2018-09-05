let obj = {
	p:[
		'hello',
		{y:'world'}
	]
}

let {p,p:[x,{y}]} = obj;
console.log(p,x,y);


let {toString: s} = 123;
console.log(s)
console.log(s === Number.prototype.toString)



