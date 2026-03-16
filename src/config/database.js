const mongoose = require("mongoose");

const dbConnection = async ()=>{
    await mongoose.connect("mongodb+srv://anilkotapothula2605:Anil12345678@devtinder.zflpox6.mongodb.net/devTinder");
}


dbConnection().then(()=>{
    console.log("Database connected successfully");
    
}).catch((err)=>{
    console.error("Unable to connect to DB " + err.message);
})

module.exports = {dbConnection};


