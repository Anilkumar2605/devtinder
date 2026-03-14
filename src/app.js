const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from 3000 server")
})

app.use("/hello",(req,res)=>{
    res.send("Hello")
})

app.listen(3000, ()=>{
    console.log("Server is sucessfully started on 3000 port");
})