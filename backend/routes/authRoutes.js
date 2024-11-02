const express = require("express");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;