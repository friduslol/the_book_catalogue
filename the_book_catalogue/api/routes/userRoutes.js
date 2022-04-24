const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.post("/create", userController.createUser)
router.get("/getCookie", userController.getCookie);
router.get("/logout", userController.logout);

module.exports = router;