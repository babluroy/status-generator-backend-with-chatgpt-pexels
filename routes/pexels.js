const express = require('express');
var router = express.Router();
const {getImages} = require("../controllers/pexels")

router.post("/get-images", getImages)

module.exports = router;