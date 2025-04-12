const express = require("express");
const { getUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getUser); // Protected route

module.exports = router;
