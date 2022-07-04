const {customerSchema:customer} = require('../Model/Schema/customer.schema');

const withDraw = async (id, amount)=>{
    const previous = await customer.findOne({_id : id});

    if(amount<=previous.customerBalance){
        tempCustomerBalance = previous.customerBalance - amount;
        const  result  = await customer.findOneAndUpdate({_id : id}, {customerBalance : tempCustomerBalance} , {new : true});
        msg = "Balance updated after withdrawal as Rs. " + tempCustomerBalance;
        return msg;
    }
    msg = "You are exceeding your account balance!";
    return msg;
}

const depositAmount = async (id, amount)=>{
    const previous = await customer.findOne({_id : id});
    tempCustomerBalance = previous.customerBalance + amount;
    const  result  = await customer.findOneAndUpdate({_id : id}, {customerBalance : tempCustomerBalance} , {new : true});
    msg = "Balance updated after deposit as Rs. " + tempCustomerBalance;
    customer.findOneAndUpdate({_id : id}, tempCustomerBalance);
    return msg;
}

const checkBalance = async (id)=>{
    const tmp = await customer.findOne({_id : id});
    return tmp;
}

module.exports.withDraw = withDraw;
module.exports.depositAmount = depositAmount;
module.exports.checkBalance = checkBalance;
