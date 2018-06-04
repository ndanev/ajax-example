
var fs = require('fs');
var express = require('express');
var app = express();



const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');


var myMap = new Map();

myMap.set("nemanja", "nemanja123");
myMap.set("gordana", "gordana123");
myMap.set("toronto", "toronto123");

// need check map if exist!


var pub = express.static('public');

var auth = function (req, res, next) {
    console.log("AUTH!");
    check('ABCD', 'email is missing').isEmail().withMessage('must be an email').trim().normalizeEmail();
    next();
};




var r1 = express.Router();
r1.get('/data', function (req, res) {
    data(res);
});
var r2 = express.Router();
r2.get('/standings', function (req, res) {
    standings(res);
});
var r3 = express.Router();
r3.get('/results', function (req, res) {
    results(res);
});
var r4 = express.Router();
r4.get('/loginform', function (req, res) {
    loginform(res);
});
var r5 = express.Router();
r5.get('/login', function (req, res) {
    login(req, res);
})

app.use(auth, pub, r1, r2, r3, r4, r5);


var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});


function loginform(res) {
    fs.readFile('./login.html', function (err, html) {
        if (err) {
            throw err;
        }
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    });
}


function login(req, res){
    var username = req.query.uname;
    var password = req.query.psw;

    console.log(username + password);
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

