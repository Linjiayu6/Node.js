var EventEmitter=require("events").EventEmitter;
var event=new EventEmitter();

event.on('eve',function(){
	console.log("some events occurs");
});

setTimeout(function(){
    event.emit('eve');
},2000);