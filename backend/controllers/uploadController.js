const path = require("path");

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).json({ success: true, imageUrl: fileUrl });
};

module.exports = { uploadImage };
