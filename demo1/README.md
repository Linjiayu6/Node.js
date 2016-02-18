# Node.js
    Node.js Learning NoteBook

##Introduction
    对于在html里面运行的JS来说, Browser就是解析器
    所以, 对于独立运行的JS, Nodejs就是一个解析器

##Aim
    实现高性能Web服务器
    事件机制和异步IO模型

##Module
    一个file就是一个module
    require、exports、module
   
   (1) require 加载别的模块
    eg: var gulp=require("gulp");

   (2) exports 模块的导出对象, 为了导出公有方法和属性
    eg: exports.hello=function(){
         console.log("A");
    }

   (3) module 可以访问到当前模块的相关信息, 替换当前模块的导出对象 模块默认导出对象被替换为一个函数
    eg: module.exports=function(){
        }














