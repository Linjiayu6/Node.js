var util=require("util");
// var obj={
// 	name:'Jessica',
// 	age:18,
// 	univ:'HKBU'
// }

function Person() { this.name = 'byvoid';
this.toString = function() { return this.name;
}; }
var obj = new Person();

//console.log(util.inspect(obj));
var date=new Date();
console.log(util.isDate(date));