# Module and Packages
##Module
    node_modules/demo5/export.js:
       exports.hello=hello;

    module.js   
       var exportjs=require("../node_modules/demo5/export.js");
       exportjs.hello("LIN JY");

##Debugging Node.js application by using node-inspector
    $ npm install -g node-inspector
    $ node-inspector &
    在另外一个terminal中输入
    $ node --debug module.js