var http=require("http")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})

	res.write('<h1>我是标题</h1>')
	res.end('222')
}).listen(3000)
