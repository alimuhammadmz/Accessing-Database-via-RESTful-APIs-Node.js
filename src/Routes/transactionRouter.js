const express = require("express");
const {withDrawAmt, depositAmt, checkBal} = require("../Controller/transactionController");

const router = express.Router();

router.put('/withdraw', withDrawAmt);
router.put('/deposit', depositAmt);
router.get('/balance', checkBal);

module.exports.transactionRouter = router;