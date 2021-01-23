const express = require("express");
const router = express.Router();

// @route    GET api/users/test
// @desc     Test /users routes
// @access   Public
router.get("/test", (req, res) => {
  res.json({ users: "working" });
});

module.exports = router;
