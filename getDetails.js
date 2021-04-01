var express = require('express');
//const { Connection } = require('pg');
var router = express.Router();
//var db = require('./database.js');
var client = require('../database');

//const bodyParser = require('body-parser');

//const { pool, Client } = require('pg');


router.get("/demo", function (req, res) {
    res.send("All Good");
});

router.get("/GetProfileData", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_user" WHERE user_id = $1', [id], function (err, result) {
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

router.get("/GetCreditTransaction", function (req, res) {

    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM you_credit_transaction WHERE crtx_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });

});

router.get("/GetGroupList", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_usergroup" WHERE usergroup_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

router.get("/GetGroupData", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_usergroup" WHERE usergroup_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

router.post("/CreateGroup", function (req, res) {
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

router.delete("/DeleteGroup", function(req, res){
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


router.put("/UpdateGroupContact", function(req, res){
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


router.get("/GetQBLists", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_questionbank" WHERE questionbank_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

router.get("/GetQBQuestions", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_question" WHERE question_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

router.get("/GetTestList", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_test" WHERE test_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

router.get("/GetTestSetting", function (req, res) {
    const { id } = req.body;
    console.log(id);

    client.query('SELECT * FROM "You_testsetting" WHERE testsetting_id = $1', [id], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

module.exports = router;
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