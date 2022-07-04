const express = require("express");
const {addAccount, deleteAccount} = require("../Controller/customerController");

const router = express.Router();

router.delete('/delete/:id', deleteAccount);
router.post('/add', addAccount);

module.exports.customerRouter = router;
