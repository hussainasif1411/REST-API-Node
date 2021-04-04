const express = require('express');
//const { pool, Client } = require('pg');
var router = require('./routes/getDetails.js');
const app = express();
//const bodyParser = require('body-parser');
//var client = require('./database.js');

app.use(express.json());
app.use(express.raw());


// support parsing of application/json type post data
//app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: true}));

app.use(router);
//app.use(client);

/*const client = new Client({
    user: '',
    host: '',
    database: '',
    password: '',
});*/

//client.connect();

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
