const { builtinModules } = require('module');
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const customer = Schema({
    bankName:  String, // String is shorthand for {type: String}
    customerName: String,
    customerAccNo: String,
    customerNIC: String,
    customerBalance: {type: Number, default: 2500}
});

const customerSchema = mongoose.model("customer", customer);
module.exports.customerSchema = customerSchema;