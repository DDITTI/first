var http = require('http')
var fs = require("fs")
http.createServer((req, res) => {
	fs.writeFile("./day2.txt", "我是vontrrssss", {"flag":"a"}, (err) => {
		if(err) {
			throw err
		}

		console.log("写入成功")
		fs.readFile("./day2.txt", (err, data) => {
			if(err) {
				throw err
			}
			console.log(data.toString())
			res.end()
		})
		
	})
}).listen(3000)