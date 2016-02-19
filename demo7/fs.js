var fs=require("fs");
fs.open("../demo4/request/File/request.txt", 'r', function(err){
  console.log("successful open");
  if (err) {
  	console.error(err);
  }
})