const express = require("express");
const router = express.Router();
const { create } = require("../controller");

router.post("/contact", create);
router.get("/contact", (req, res) => {
  res.send("this is from contactus router");
});
module.exports = router;
