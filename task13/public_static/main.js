/**
 * Created by rishika on 7/7/17.
 */
$(function () {

    // var keyn=$('#inp').val();
    // var value1=$('#inp1').val();
    var keyn =document.getElementById('inp');
    var value1 =document.getElementById('inp1');

    $('#show').click(function () {

        $.get("/showlist",function(data)
        {
            // data= JSON.parse(data);
            // // Object.keys(data).forEach(function(x){
            // //
            // //      for(var t in data[x])
            // //     $('#list').append('<li>' + data[x][t] + '</li>');
            // // });
            // $('#list').append('<li>' + data['task2'] + '</li>');
            $('#list').html("");
            console.log(data);
            for(var i=0;i<data.length;i++)
            {
                console.log(data[i]);
                for(var t in data[i])
                    $('#list').append('<li>' + data[i][t] + '</li>');
            }

        });

    });


    $('#add').click(function () {

        var obj={};
        obj[keyn.value]=(value1.value);
        console.log(obj);
        $.get("/add_in_list?todo=" + JSON.stringify(obj),function(data){

            alert("Added " + data + ". Refresh to see modified list");
        });

    });

    // $('#write').click(function () {
    //
    //     $.get("/writefile",function(data){
    //         alert(data);
    //
    //     });
    //
    //
    // });

});