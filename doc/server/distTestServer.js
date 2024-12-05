// require("babel-register");

// global packages
let express = require('express');
let path = require('path');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let https = require('https');
let fs = require('fs');

// CORS setup (cross-site access etc)
const whitelist = [
  // Enter allowed domains here
  'http://localhost:3000', // nodejs
  'http://localhost:3100', // others
  'http://localhost:4200', // ng serve
  'http://localhost:8080', // WildFly
];
let corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    // == THIS WILL WHITELIST WHO CAN ACCESS US ==
    // callback(null, originIsWhitelisted);

    // == THIS WILL ALLOW ANY CONNECTION ==
    callback(null, true);
  },
  credentials: true
};

console.log("Angular-Base-Framework dist test server is starting...");

// express
let app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

process.on('unhandledRejection', console.log.bind(console));

env = process.env.NODE_ENV || 'development';
// map all /node_module/ calls
app.use('/', express.static(path.join(__dirname, '../dist/base-test')));
app.use(express.static(path.join(__dirname, '..dist/base-test/assets')));

app.get('/test401', (req, res) => {
  res.sendStatus(401).send("Unauthorized - this is a test 401 message");
});

// let styleFile = getFilesFromPath(path.join(__dirname, "../dist/nexbis-gui"), ".css")[0];

/* UNCOMMENT BELOW TO ENABLE HTTPS LOCALLY */

// var options = {
//   key: fs.readFileSync('../httpscerts/keyStore.pem'),
//   cert: fs.readFileSync('../httpscerts/keyStore.crt'),
// };

// https.createServer(options, app).listen(443);
// console.log("HTTPS listening on 443");

module.exports = app;

function getFilesFromPath(path, extension) {
  let dir = fs.readdirSync(path);
  return dir.filter(elm => elm.match(new RegExp(`.*\.(${extension})`, 'ig')));
}

// we're good to go
console.log("Angular-Base-Framework dist test server is up and running");
