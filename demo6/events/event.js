var events=require("events");
var emitter=new events.EventEmitter();
emitter.on('add',function(x,y){
   console.log("add:"+(x+y));
});
emitter.on("minus",function(x,y){
   console.log("minus:"+(x-y));
});
emitter.emit('add',16,6);