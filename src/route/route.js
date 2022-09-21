const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.get('/updateValue',controller.getContactById)

module.exports = router