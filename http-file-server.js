const fs = require('fs')
const http = require('http');

var file = process.argv[3];
const server = http.createServer((req, res)=> {
	fs.createReadStream(file).pipe(res);
})
server.listen(process.argv[2])
