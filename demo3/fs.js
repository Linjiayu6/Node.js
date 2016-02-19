var fileCopy=require("../node_modules/demo3/fileCopy.js");
var path={
	source:'./Source/read.txt',
	target:"./Target/write.txt"
}
fileCopy.start(path.source,path.target);