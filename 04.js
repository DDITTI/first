var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	
	if(req.url=='/favicon.ico'){
		return
	}
	var query=url.parse(req.url,true).query
	console.log(query)
	console.log(query.name)
	console.log(query.age)
	
	res.end()
}).listen(3000)