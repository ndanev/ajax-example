var http = require('http');
fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.
    if (req.url == "/") {
        index(res);
    }
    if (req.url == "/data") {
        data(res);
    }
    if (req.url == "/standings") {
        standings(res);
    }
    if (req.url == "/results") {
        results(res);

    }
}).listen(80);

function index(res) {
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

function data(res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');

}

function standings(res) {
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end('["Raptors","Celtics","76ers","Cavaliers","Pacers"]');

}

function results(res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end('["Liverpool-Stoke 2 : 0", "Spurs-Watford 3 : 0", "Crystal Palas-Leichester 2 : 2", "Manchester City-West Ham 3 : 1" ]');
}

