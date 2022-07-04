const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {transactionRouter} = require("./src/Routes/transactionRouter");

app.use("/transaction", transactionRouter);

app.listen(3030, function(err){
    if(err)
        console.log("Error in server setup")
    else
        console.log("Server listening on Port", 3030);
})