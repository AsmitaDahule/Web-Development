const http = require('http');

const server = http.createServer(function(req,res) {
    console.log(req);
    
    res.end("hey")
})

server.listen(3000);