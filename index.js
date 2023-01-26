var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Hello Jose!');
    res.end();
}).listen(process.env.PORT || 3085);