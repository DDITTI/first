var http = require("http")
//get方式获取
var url = require("url")
http.createServer((req, res) => {

	if(req.url == '/favicon.ico') {
		return
	}
	var result = url.parse(req.url, true)
//
//	console.log(result.query.name)
//	console.log(result.query.age)
	var format = url.format({
		host: "localhost:3000",
		port: 3000,
		hostname: null,
		hash: null,
		search: '?name=eee&age=1000',
		query :{name: 'eee',age: '1000'},
		pathname: '/',
		path: '/?name=eee&age=1000',
		href: 'http://localhost:3000'
	})
	console.log(format)
	res.end()
}).listen(3000)