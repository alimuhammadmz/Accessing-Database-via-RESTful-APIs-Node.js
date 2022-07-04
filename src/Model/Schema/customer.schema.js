const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const customerSchema = new Schema({
    bankName:  String, // String is shorthand for {type: String}
    customerName: String,
    customerAccNo: String,
    customerNIC: String,
    customerBalance: {type: Number, default: 2500}
});