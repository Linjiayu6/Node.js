var fs=require("fs");
//1. 异步读取文件
/*
fs.readFile("request/File/request.txt",'utf-8',function(data,err){
  if (err) {
  	console.error(err);
  }else{
  	console.log(data);
  }
});
console.log("end");
*/

/*
Result:
end
Hello World LJY
/....
Hello World LJY
...,,.,./
Hello World LJY
!!@@##!!@#
*/

//2. 同步读取文件


var data=fs.readFileSync("request/File/request.txt")
console.log(data.toString());
console.log("end");

/*
Result:
Hello World LJY
/....
Hello World LJY
...,,.,./
Hello World LJY
!!@@##!!@#
end
*/