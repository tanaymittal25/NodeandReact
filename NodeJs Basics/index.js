const http = require('http');

const server = http.createServer( (req, res) => {
	res.end("Hey How Are You ?");
});

server.listen(3000);