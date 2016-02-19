#Node.js Events and Util
##Events
    var events=require("events");
    var emitter=new events.EventEmitter();
    emitter.on(name,fn)
    emitter.emit(name,[arguments1,arg2,...])

    [Reference]( https://nodejs.org/api/events.html)

##util
    var util=require("util");
    
    util.inherits(C, P);//C extends P
    但是child只能继承P.prototype的内容
    不能使用P的构造函数

    [Reference]( https://nodejs.org/api/util.html)