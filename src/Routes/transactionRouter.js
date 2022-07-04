const express = require("express");
const {withDrawAmt, depositAmt, checkBal} = require("../Controller/transactionController");

const router = express.Router();

router.put('/withdraw/:id', withDrawAmt);
router.put('/deposit/:id', depositAmt);
router.get('/balance/:id', checkBal);

module.exports.transactionRouter = router;
