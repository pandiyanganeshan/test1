const express=require("express");
const app=express();
const date=require(__dirname + "/date.js");


app.get("/",function(req,res) {
const arr=[];
//arr.push("121");
arr=[12];
//res.write(arr[0]);


res.write("<h1>"+ date.getDate() +"</h1>")
res.write("<h1>"+ date.getDay() +"</h1>");
res.send();
})

app.listen(3000,function () {
  console.log("server connected");
})
