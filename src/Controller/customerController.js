const {customerSchema} = require('../Model/Schema/customer.schema');
const express = require('express');
const {addAccount, deleteAccount} = require("../Services/customerService");

const addAccountController = async (req, res) =>{
    const {bankName, customerName, customerAccNo, customerNIC} = req.body;                               //destructuring

    const customer = new customerSchema({
        bankName: bankName, // String is shorthand for {type: String}
        customerName: customerName,
        customerAccNo: customerAccNo,
        customerNIC: customerNIC
    });

    try{
        const result = await addAccount(customer);
        res.send(result);
    }catch(err){
        res.status(404).send({error : err});                //No such account exists in database
    }
}

const deleteAccountController = async (req, res) =>{
    const {id} = req.params; 
    
    try{
        const result = await deleteAccount(id);
        res.send(result);
    }catch(err){
        res.status(404).send({error : err});                //No such account exists in database
    }
}

module.exports.addAccount = addAccountController;
module.exports.deleteAccount = deleteAccountController;
