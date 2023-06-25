const express = require('express');
var router = express.Router();
const {generateWhatsappStatus} = require("../controllers/openai")

router.post("/generate-whatsapp-status", generateWhatsappStatus)

module.exports = router;