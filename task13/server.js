/**
 * Created by rishika on 7/7/17.
 */

var express = require('express');
var filesystem= require('fs');
const fileUpload = require('express-fileupload');
var app= express();

app.use(fileUpload());

var todolist=[];
app.use('/',express.static('public_static'));

app.get('/showlist',function(req,res) {

    var arr=[];
    filesystem.readFile("text.json",function(err,data)
    {
        if(err) throw err;
        var arr=data.toString().split(',');
        arr=arr.map(function(x){
            return(JSON.parse(x));
        });
        arr.map(function(x){
            todolist.push(x);
        });
        res.send(arr);

    });




});



app.get('/add_in_list',function(req,res) {

    var obj=JSON.parse(req.query.todo);
    console.log(req.query.todo);
    todolist.push(obj);

    filesystem.appendFile("text.json",","+JSON.stringify(obj),function (err) {         //overwrites

        console.log("append");
        if(err) throw err;
        console.log("success printed");
    });
    res.send("rishika");

});

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.sampleFile;
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./text.json', function(err) {
        if (err)
            return res.status(500).send(err);
    });

        res.send('File uploaded!');


});

app.listen(4000 || process.env.port,function(response,err){           //as soon as server allocated to 4000 it runs callback
    if(err) throw err;
    console.log("server is running on port" + 3000);
});