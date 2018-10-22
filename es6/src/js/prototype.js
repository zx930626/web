// var a = new Array(1,2,3)
// console.log(typeof a)

// function Stu(age) {
// 	this.age = age;
// }
// var xiaomi = new Stu(111)
// console.log(xiaomi)
// console.log(xiaomi.constructor)
// console.log(typeof xiaomi)

// var arr = [1,2,3];
// console.log(arr.constructor == Array);
// console.log(typeof arr)

// Object.create
// var xiaomi = Object.create({
// 	age:11
// },{
// 	name:{value:'xiaoming',enumerable:true,writable:true,configurable:true},
// })
// console.log(xiaomi)

// var xiaohong = Object.create({name:"xiaohong"})
// console.log(xiaohong)

/* Object.defineProperties()  Object.defineProperty() */
// var obj = {
// 	x:"222",
// 	y:"yyy"
// }
// var obj = Object.defineProperty({}, {
// 	name:{value:'xiaoming'}
// })
// console.log(obj)


// var obj = Object.defineProperty({},"name",{value:"xiaoming"})
// console.log(obj)

// var obj = {
// 	name:"xiaoming",
// 	age:11
// }
// Object.freeze(obj);
// console.log(obj.name)
// obj.name = "xiaohong";
// console.log(obj.name)
// obj.grade = 2;
// console.log(obj)


var obj = {
	name:'xiaoming'
}
var des = Object.getOwnPropertyDescriptor(obj, "name")
console.log(des)













