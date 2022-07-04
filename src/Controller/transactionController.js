const express = require('express')

const {withDraw, depositAmount, checkBalance} = require("../Services/transactionService");

const withDrawAmtController = async (req, res) =>{
    const {amt} = req.body;                               //destructuring
    const {id} = req.params;
    
    try{
        const result = await withDraw(id, amt);
        res.json(result);
    }catch(err){
        res.status(202).send({error : err});               //request sent, but processing not completed.
    }
}

const depositAmtController = async (req, res) =>{
    const {amt} = req.body;
    const {id} = req.params;

    try{
        const result = await depositAmount(id, amt);
        res.json(result);
    }catch(err){
        res.status(202).send({error : err});
    }
}

const checkBalController = async (req, res) =>{
    const {id} = req.params; 
    
    try{
        const result = await checkBalance(id);
        console.log(result.customerBalance);
        res.send(result);
    }catch(err){
        res.sendStatus(404);                //No such account exists in database
    }
}

module.exports.withDrawAmt = withDrawAmtController;
module.exports.depositAmt = depositAmtController;
module.exports.checkBal = checkBalController;
