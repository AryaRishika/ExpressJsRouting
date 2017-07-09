/**
 * Created by rishika on 9/7/17.
 */
$(function () {

    $('#delete').click(function(){

        var radio = document.getElementsByName('parameter');
        var value;
        for(var i=0;i<radio.length;i++)
        {
            if(radio[i].checked)
            {
                value= radio[i].value;
                i=3;
            }
        }
        console.log(value);
    });

    /*************** SHOW DATABASES *************************/
    $('#show').click(function()
    {
       $.get('/showDatabase',function(data)
       {
           console.log(data);
           for(var i=0;i<data.length;i++){
               $('.box').append('<li>' + data[i]['task'] + '::' + data[i]['done'] + '</li>');
           }
       });

    });

    /*********** INSERT QUERY *********************************/
    $('#insert').click(function()
    {

        var a=document.getElementById('task').value;
        var b=document.getElementById('status').value;
        $.post({url:'insert'},{task:a,done:b},function(data){        //{id:1} req.body.id
            console.log(data);
        });

    });

    /************ DELETE QUERY ***********************************/

    $('#delete').click(function()
    {

        var a=document.getElementById('delq').value;
        $.post({url:'delete'},{id:a},function(data){        //{id:1} req.body.id
            console.log(data);
        });

    });


    /**************** UPDATE QUERY ******************/

    $('#update').click(function()
    {

        var a=document.getElementById('up_id').value;
        var b=document.getElementById('up_s').value;
        $.post({url:'update'},{id:a,done:b},function(data){        //{id:1} req.body.id
            console.log(data);
        });

    });



});