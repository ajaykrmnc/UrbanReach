const express = require("express");
const router = express.Router();
const { carrierApply } = require("../controller");

router.post("/apply", carrierApply);
router.get("/apply", (req, res) => {
  res.send("This is from Apply page");
});
module.exports = router;
