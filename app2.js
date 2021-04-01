const express = require('express');
const { pool, Client } = require('pg');
const app = express();
//const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.raw());

app.use(express.urlencoded({extended: false}));

// support parsing of application/json type post data
//app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));


const client = new Client({
    user: 'postgres',
    host: 'pgty.culspqqylzzq.ap-south-1.rds.amazonaws.com',
    database: 'postgresnew',
    password: 'testyoudb',
});

client.connect();

app.get("/GetProfileData", function (req, res) {
    const { id } = req.body;
    console.log(id);
    
    client.query('SELECT * FROM "You_user" WHERE user_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });

    /*client.query('SELECT * FROM pg_catalog.pg_tables', function(err, result) {
       console.log(result);
     });*/
});

app.get("/GetCreditTransaction", function (req, res) {
    
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM you_credit_transaction WHERE crtx_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
    
});

app.get("/GetGroupList", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_usergroup" WHERE usergroup_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

app.get("/GetQBLists", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_questionbank" WHERE questionbank_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

app.get("/GetQBQuestions", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_question" WHERE question_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

app.get("/GetTestList", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_test" WHERE test_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

app.get("/GetTestSetting", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_testsetting" WHERE testsetting_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});


app.get("/GetGroupData", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_usergroup" WHERE usergroup_id = $1',[id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

app.post("/CreateGroup", function (req, res) {
    const { name, desc, id, gStatus } = req.body;
    console.log(name);
    console.log(desc);
    console.log(id);
    console.log(gStatus);

    client.query('INSERT INTO "You_usergroup" (usergroup_name,usergroup_description,user_id,group_status) VALUES ($1,$2,$3,$4)', [name, desc, id, gStatus], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        //res.send(result.rows[0]);
        console.log("All Good");
    });

    res.send("Record Inserted!");

});

app.delete("/DeleteGroup", function(req, res){
    const { id, gId } = req.body;
    console.log(id);
    console.log(gId);
    
    client.query('DELETE FROM "You_usergroup" WHERE user_id = $1 AND usergroup_id = $2', [id, gId], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        //console.log(result);
        console.log("All Good");
    });
    res.send("Record Deleted!");
});

app.put("/UpdateGroupContact", function(req, res){
    const { name, id, gId } = req.body;
    console.log(id);
    console.log(gId);
    console.log(name);

    client.query('UPDATE "You_usergroup" SET usergroup_name = $1 WHERE user_id = $2 AND usergroup_id = $3', [name, id, gId], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        //console.log(result);
        console.log("Hello");
        //res.send(result.rows[0]);
    });
    res.send("Record Updated!");
});


/*

app.get("/GetTestDetail", function (req, res) {

});

app.get("/GetTestResult", function (req, res) {

});

app.get("/GetTestSectionDetails", function (req, res) {

});

app.get("GetCreditBalance", function (req, res) {

});

app.get("/GetQB_questionAdd_TSection", function (req, res) {

});

*/

app.listen(3000, function () {
    console.log("Listening on port 3000");
});