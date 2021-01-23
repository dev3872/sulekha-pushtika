const express = require("express");
const router = express.Router();

// @route    GET api/auth/test
// @desc     Test /auth routes
// @access   Public
router.get("/test", (req, res) => {
  res.json({ auth: "working" });
});

module.exports = router;
