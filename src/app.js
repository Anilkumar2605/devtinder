const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send("{name: Akshay, age: 30}")
})


app.post("/user",(req,res)=>{
    res.send("Posted sucessfully");
})


app.delete("/user",(req,res)=>{
    res.send("Deleted sucessfully")
})

app.listen(3000, ()=>{
    console.log("Server is sucessfully started on 3000 port");
})