const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { uploadImage } = require("../controllers/uploadController");

const router = express.Router();

// Ensure 'uploads/' exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueName + ext);
  },
});
const upload = multer({ storage });

// POST /api/uploads
router.post("/", upload.single("image"), uploadImage);

module.exports = router;
