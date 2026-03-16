const express = require("express");
const app = express();

const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
require("./config/database");

app.listen(3000, ()=>{
    console.log("Server is sucessfully started on 3000 port");
})