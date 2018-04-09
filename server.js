const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const passport = require('passport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));


app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "https://xueyuan.herokuapp.com");
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

const port=process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);



require("./assignment/app")(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))
});
