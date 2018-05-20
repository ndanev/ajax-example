
var fs = require('fs');
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    index(res);
})

app.get('/data', function (req, res) {
    data(res);
})

app.get('/standings', function (req, res) {
    standings(res);
})

app.get('/results', function (req, res) {
    results(res);
})



var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})



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
    res.end('I am Nemanja Danev...');

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

