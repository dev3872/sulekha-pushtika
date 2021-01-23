const express = require("express");
const router = express.Router();

// @route    GET api/sulekh/test
// @desc     Test /sulekh routes
// @access   Public
router.get("/test", (req, res) => {
  res.json({ sulekh: "working" });
});

module.exports = router;
