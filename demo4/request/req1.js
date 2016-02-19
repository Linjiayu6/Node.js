//request请求得到文件的内容
var request=require("request");
var fs=require("fs");
var url="http://127.0.0.1:8124/";

/*
request(url,function(error,response,body){
   if (!error&&response.statusCode == 200) {
      console.log(body);
   }
})
*/


// request(url).pipe(fs.createWriteStream("File/request.txt"));

fs.createReadStream("File/reqcontent.json").pipe(request.put(url));


