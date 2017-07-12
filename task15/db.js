/**
 * Created by rishika on 12/7/17.
 */
var mysql = require('mysql');
var dbconfig = {

    host        : 'localhost',
    user        : 'Rishika',
    password    : 'Rishik@96',
    database    : 'newdb'

};

function TodoList(query ,cb){


    var connection= mysql.createConnection(dbconfig);
    connection.connect();
    connection.query(query,function(err,data){

        if(err) throw err;
        cb(data);
        connection.end();
    });

}
module.exports = {
    TodoList:TodoList
};



