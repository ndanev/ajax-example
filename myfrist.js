var http = require('http');
fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == "/") {
        console.log('bla bla..');
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }
    if (req.url == "/data") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }
}).listen(80);