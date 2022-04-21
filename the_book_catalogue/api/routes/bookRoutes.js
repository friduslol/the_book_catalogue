const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.post("", bookController.addBook);
router.delete("/delete/:isbn", bookController.removeBook)

module.exports = router;