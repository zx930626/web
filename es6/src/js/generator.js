// function* gen () {
// 	yield 123 + 234
// }
// var f = gen();
// console.log(f.next())

// function* fibonacci(){
// 	let [prev,curr] = [0,1];
// 	while (true) {
// 		[prev,curr] = [curr,prev + curr];
// 		yield curr
// 	}
// }
// for (let n of fibonacci()) {
// 	if (n > 1000) {
// 		break
// 	}
// 	console.log(n)
// }

// function* foo (x) {
// 	console.log(x,'x');
// 	var y = 2 * (yield (x + 1));
// 	console.log(y,'y');
// 	var z = yield (y / 3);
// 	console.log(z,'z');
// 	return (x + y + z)
// }
// var a = foo(5);
// a.next();
// a.next(12);
// a.next(13);

// function wrap(genFunc) {
//     return function (...args) {
//     	console.log(args,'args')
//         let genObj = genFunc(...args);
//         genObj.next();
//         console.log(genObj)
//         return genObj;
//     }
// }
// const wrapped = wrap(function* (){
//     console.log(`first_input : ${yield}`)
//     return `Done`
// })
// wrapped().next(11);

function* foo(){
	yield 2;
	yield 3;
	return "foo";
}
function* bar () {
	yield 1;
	var v = yield* foo();
	console.log("v:",v);
	yield 4
}
var it = bar();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())



function* iterTree(tree) {
	if (Array.isArray(tree)) {
		for (var i = 0;i < tree.length; i++) {
			yield* iterTree(tree[i])
		}
	}else{
		yield tree
	}
}
const tree = [1,[2,3],[4,[5,6]]]
for (let x of iterTree(tree)) {
	console.log(x)
}




