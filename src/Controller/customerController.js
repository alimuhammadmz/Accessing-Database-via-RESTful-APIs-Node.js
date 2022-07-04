const express = require('express')

const {addAccount, deleteAccount} = require("../Services/customerService");

const addAccountController = async (req, res) =>{
    const {customer} = req.body;                               //destructuring
   
    try{
        const result = addAccount(customer);
        res.send(result);
    }catch(err){
        res.status(404).send({error : err});                //No such account exists in database
    }
}

const deleteAccountController = async (req, res) =>{
    const {id} = req.params; 
    
    try{
        const result = deleteAccount(id);
        res.send(result);
    }catch(err){
        res.status(404).send({error : err});                //No such account exists in database
    }
}

module.exports.addAccount = addAccountController;
module.exports.deleteAccount = deleteAccountController;
