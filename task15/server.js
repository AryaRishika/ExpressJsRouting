/**
 * Created by rishika on 12/7/17.
 */
var express = require('express');
var bodyparser = require('body-parser');
var sql = require('./db');
var app = express();
var path = require('path');
var port=5000 || process.env.port;



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set('view  engine','hbs');
app.set('views',path.join(__dirname,'views'));  //views where our res will embed....can b index or anything.....html->.hbs


console.log(__dirname); //absolute path of lecture15
app.use('/',express.static(path.join(__dirname,'public_static')));

app.get('/todos/all',function(req,res){

    var query = "SELECT * FROM todos";
    sql.TodoList(query,function(data){
        console.log(data);
        res.render('index.hbs',{data:data});
    });
});

app.post('/todos/insert',function(req,res){

    var query = "INSERT INTO todos (task , done) values (' " + req.body.task + "'," +req.body.done +")";
    sql.TodoList(query,function(data){

        console.log(data);
    });
    res.send("Inserted");

});

app.post('/todos/update',function(req,res){

    console.log(req.body.done, req.body.id);
    var query = "UPDATE todos SET done=" + req.body.done + " WHERE id=" + req.body.id;
    sql.TodoList(query,function(data){

        console.log(data);
    });
    res.send("Updated");

});


app.post('/todos/delete',function(req,res){

    var query = "DELETE FROM todos WHERE id=" + req.body.id;
    sql.TodoList(query,function(data){

        console.log(data);
    });
    res.send("Deleted");

});


app.get('/all',function(req,res){

    res.render('index.hbs',{todo:'welcome'});                   //searches for hbs file in views and embed dis obj in index

});

app.listen(5000,function(){
    console.log("server running at :" + port);
});

// app.get('kl/:id',{
// res(req.params);
// });