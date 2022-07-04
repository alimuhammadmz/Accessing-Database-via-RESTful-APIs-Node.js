const express = require('express')

const {withDraw, depositAmount, checkBalance} = require("../Services/transactionService");

const withDrawAmtController = async (req, res) =>{
    withDraw();
}

const depositAmtController = async (req, res) =>{
    depositAmount();
}

const checkBalController = async (req, res) =>{
    checkBalance();
}

module.exports.withDrawAmt = withDrawAmtController;
module.exports.depositAmt = depositAmtController;
module.exports.checkBal = checkBalController;
