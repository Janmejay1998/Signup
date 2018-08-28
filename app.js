var express = require('express');
var bodyParser = require('body-parser');

var app = express();
 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://janmejay:shraddha1999@ds229312.mlab.com:29312/rj';
 
// Database Name
const dbName = 'rj';


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
   dbo = client.db(dbName);
   
 
  app.listen(process.env.PORT||5000, function(){
    console.log("server running on port 5000");
  });
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var loginController = require('./controller/loginController');
app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    dbo.collection('user').findOne( { email, password }, (err, value) => {
        if(err || value === null) return res.redirect('/')
        
        console.log(err, value);
        res.render('profile', { loginData: value });
    });
});
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/regiterToDb', (req, res) => {
    console.log(req.body);
    dbo.collection('user').insertOne( req.body, (err, value) => {
        console.log(err, value);
        res.redirect('/');
    });
});

app.use(express.static('./public'));

loginController(app);