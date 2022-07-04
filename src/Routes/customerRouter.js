const express = require("express");
const {addAccount, deleteAccount} = require("../Controller/customerController");

const router = express.Router();

router.put('/add', deleteAccount);
router.post('/add', addAccount);

module.exports.customerRouter = router;
