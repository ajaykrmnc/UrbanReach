const express = require("express");
const router = express.Router();
const { carriercreate, read } = require("../controller");

router.post("/carrier", carriercreate);
router.get("/carrier", read);
module.exports = router;
