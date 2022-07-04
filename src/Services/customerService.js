const {customerSchema:customer} = require('../Model/Schema/customer.schema');
const mongoose = require('mongoose');

const addAccount = async (account)=>{
    const result = await account.save();   
    return result;
}

const deleteAccount = async (id)=>{
    const result = await customer.findOneAndDelete({_id : id});
    return result;
}

module.exports.addAccount = addAccount;
module.exports.deleteAccount = deleteAccount;
