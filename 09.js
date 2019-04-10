var http = require('http')
var fs = require("fs")
http.createServer((req, res) => {
	if(req.url == '/favicon.ico') {
		return
	}
	//	//目录操作
	//	fs.mkdir("./img23",(err)=>{
	//		if(err) {
	//				throw err
	//			}
	//			console.log("创建成功")
	//			res.end()
	//	})
	//	删除文件夹
	//fs.rmdir("./img23",(err)=>{
	//		if(err) throw err
	//			
	//			console.log("删除成功")
	//			res.end()
	//		})
	//改名
	//		fs.rmdir("./img23","./img2333",(err)=>{
	//		if(err) throw err
	//			console.log("成功")
	//			res.end()
	//		})
	//删除文件
	//		fs.unlink("./img23/day02.txt",(err)=>{
	//		if(err){throw err}
	//			console.log("成功")
	//			res.end()
	//		})

//	fs.exists("./img23/", (exists) => {
//		if(exists) {
//			console.log("该文件乙醇在")
//		} else {
//			fs.mkdir("./img23", (err) => {
//				if(err) {
//					throw err
//				}
//				console.log("创建成功")
//				res.end()
//			})
//		}
//	})
	//读取文件夹信息
//	fs.reddir("./img23/", (err,data) => {
//		if(err){throw err}
//				console.log(data)
//				res.end()
//			})
	//判断文件还是文件夹
   fs.stat("./img23",(err,stats)=>{
   	if(err){
   		throw err
   	}else{
   		if(stats.isDirectory()){
   			console.log("是文件夹")
   		}else{
   			console.log("是文件")
   		}
   	}
   	console.log(stats)
   	res.end()
   })


}).listen(3000)