const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {transactionRouter} = require("./src/Routes/transactionRouter");
const {customerRouter} = require("./src/Routes/customerRouter");

app.use("/transaction", transactionRouter);
app.use("/customer", customerRouter);

main().then(response =>{
    console.log("Connected to database!")
}).catch(err => {
    console.log(err)
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017");              //connecting with (mongodb compass) database
}

app.listen(3030, function(err){
    if(err)
        console.log("Error in server setup")
    else
        console.log("Server listening on Port", 3030);
});