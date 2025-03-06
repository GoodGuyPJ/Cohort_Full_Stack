const express = require("express");
const { registerUser } = require("./userController");
const router = express.Router();

router.route("/api/v1/register").post(registerUser);
router.route("/register").get(registerUser);

module.exports = router;
