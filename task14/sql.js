/**
 * Created by rishika on 9/7/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host        : 'localhost',
    user        : 'Rishika',
    password    : 'Rishik@96',
    database    : 'newdb'
};

function getTodos(cb){


    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('SELECT * FROM todos',function(err,rows,fields){
        cb(rows);

    });

};

function insert(task,done){


    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('INSERT INTO todos(task,done) VALUES("' + task +'","' + done + '")',function(err,rows,fields){
            console.log(task);
    });

};
function delete1(id){


    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('DELETE FROM todos WHERE id='+ id,function(err,rows,fields){
        console.log(id);
    });

};

function update(id,done){


    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('UPDATE todos SET done='+ done +' WHERE id='+id,function(err,rows,fields){
    });

};

module.exports = {
    get : getTodos,
    insert:insert,
    delete:delete1,
    update:update
};