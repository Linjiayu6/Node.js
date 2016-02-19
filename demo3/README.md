#Node.js  操作文件
##fs.js
##Copy files
    (1) First..
        var fs = require("fs");
        createReadStream & createWriteStream
        var rs=fs.createReadStream(source);
        var ws=fs.createWriteStream(target);
     
        rs.pipe(ws)
     (2) Second..
         rs.on('data',function(chunk){
         ws.write(chunk);
         });
     (3) Reference:
         https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback

##Buffer数据块
      二进制数据
##Stream数据流


