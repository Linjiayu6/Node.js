var util=require("util");

var P=function(){
	this.name="parents";
	this.sayHello=function(){
	   console.log("sayHello:"+this.name);
	}
}
P.prototype.showName=function(){
	console.log("showName:"+this.name);
}

var C=function(){
	this.name="children";
}

util.inherits(C, P);//C extends P


var c=new C();
//c.sayHello();  这个会报错
c.showName();
console.log(c);

