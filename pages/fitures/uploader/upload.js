/*const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");
const multer = require("multer");

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

module.exports = async (req, res) => {
  const apiKey = req.query.apiKey;

  // Check if API Key is provided and valid
  if (!apiKey) {
    return res.status(403).json({
      error: "API Key is required."
    });
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "Invalid API Key."
    });
  }

  // Use multer to handle file upload
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to upload file. Please try again.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded. Please provide a file."
      });
    }
    

    // Create a FormData object to send the file to itzpire.com
    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    // Send POST request to itzpire.com to upload the file
    try {
      const response = await axios.post("https://itzpire.com/tools/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Return the response from itzpire.com
      res.status(200).json(
        success: true,
        message: "File uploaded successfully.",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "There was an error processing the file upload. Please try again later.",
      });
    }
  });
};
*/
