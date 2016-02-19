#HTTP, Events
    1.'http'模块提供两种使用方式：
       作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
       作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。

       var http = require('http');
       http.createServer(function(request,response){
         .....
        }).listen(8000);

    2. supervisor
       实时监控npm install -g supervisor
       supervisor http.js

    3. 异步和同步
       Asynchronous I/O 
       Non-blocking I/O 非阻塞式
       $ node async.js 
       fs.readFile(path,callback) 异步的
       fs.readFileSync(path) 同步 数据是按照二进制存在 


    4. 事件
       var EventEmitter=require("events").EventEmitter;
       var event=new EventEmitter();
       event.on('name',fn);
       event.emit("name");


















