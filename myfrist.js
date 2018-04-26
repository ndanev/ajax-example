var http = require('http');
fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.
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
    if (req.url == "/standings") {
        //res.writeHead(200, { 'Content-Type': 'application/json' });
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end('["Raptors","Celtics","76ers","Cavaliers","Pacers"]');
    }
}).listen(80);