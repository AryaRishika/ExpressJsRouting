/**
 * Created by rishika on 9/7/17.
 */
var express = require('express');
var sql = require('./sql.js');
var bodyparser = require('body-parser');
var app = express();

app.use('/',express.static('public_static'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/showDatabase',function(req,res)
{
    sql.get(function(data){

        console.log(data);
        res.send(data);
    });

});

app.post('/insert',function(req,res){

    console.log(req.body.task,req.body.done);
       sql.insert(req.body.task,req.body.done);
});

app.post('/delete',function(req,res){

    sql.delete(req.body.id);
});

app.post('/update',function(req,res){

    sql.update(req.body.id,req.body.done);
});


app.listen(3000,function(){
    console.log("server is listening at port 3000");
});