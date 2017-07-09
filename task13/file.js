/**
 * Created by rishika on 7/7/17.
 */
/************** NODE JS FILE sYSTEM *********************/

var filesystem= require('fs');             //access of sys files fr read and write

/*filesystem.writeFile("text.txt","hello",function (err) {         //overwrites
    if(err) throw err;
    console.log("success printed");
});*/

var obj={task3:3};
filesystem.appendFile("text.json",","+JSON.stringify(obj),function (err) {         //overwrites

    console.log("append");
    if(err) throw err;
    console.log("success printed");
});
console.log("file is not written"); //async


filesystem.readFile("text.json",function(err,data)
{
    console.log("read");
    if(err) throw err;
    // console.log(data.toString());c   //data:buffer of chars
    //data=JSON.parse(data);
   // console.log(data.toString());
    var arr=data.toString().split(',');
    console.log(JSON.parse(arr[2]));
});