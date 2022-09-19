const express= require("express");
const router= express.Router();

const controller= require("../controller/controller.js");

router.post("/assignment", controller.urlParams)

module.exports = router