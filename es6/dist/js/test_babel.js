'use strict';

var Students = function Students(name, age) {
	return {
		name: name,
		age: age
	};
};

// function Students(name,age) {
// 	this.name = name;
// 	this.age  = age;
// }

// var stu = new Students("nike",14)
// console.log(stu)
console.log(Students('nike', 14));