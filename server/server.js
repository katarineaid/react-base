
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();
let http = require('http').Server(app);
let router = express.Router();


let address = 'localhost';
let port = 8500;

runServer();

function runServer() {
  app.use(express.static(__dirname + '/../dist'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });

  http.listen(port, function() {
    console.log('+------------------------------------------------------------+');
    console.log('| System is up and running. Copy the URL below and open this |');
    console.log('| in your browser: http://' + address + ':' + port + '/                |');
    console.log('+------------------------------------------------------------+');
  });
}