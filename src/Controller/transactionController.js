const express = require('express')

const {withDraw, depositAmount, checkBalance} = require("../Services/transactionService");

const withDrawAmtController = async (req, res) =>{
    const {amt} = req.body;                               //destructuring
    
    try{
        const result = withDraw(amt);
        res.send(result);
    }catch(err){
        res.status(202).send({error : err});               //request sent, but processing not completed.
    }
}

const depositAmtController = async (req, res) =>{
    const {amt} = req.body;
    
    try{
        const result = depositAmount(amt);
        res.send(result);
    }catch(err){
        res.status(202).send({error : err});
    }
}

const checkBalController = async (req, res) =>{
    const {id} = req.params; 
    
    try{
        const result = checkBalance(id);
        res.send(result);
    }catch(err){
        res.status(404).send({error : err});            //No such account exists in database
    }
}

module.exports.withDrawAmt = withDrawAmtController;
module.exports.depositAmt = depositAmtController;
module.exports.checkBal = checkBalController;
