const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url; // Changed from `urls` to `url`
  const apiKey = req.query.apiKey;
/*
   * Pinterest Downloader
   * By [Your Name]
   * Don't remove the watermark
*/

const express = require('express');
const { pinterest } = require('ironman-api');
const allowedApiKeys = require("../../declaration/arrayKey.jsx"); // Update the path as needed

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = async (req, res) => {
  const { url, apiKey } = req.query;

  // Validate URL
  if (!url) {
    return res.status(400).json({
      error: "Provide a Pinterest URL",
    });
  }

  // Validate API key
  if (!apiKey || !allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "Invalid or missing API key",
    });
  }

  try {
    // Fetch Pinterest data using the ironman-api library
    const data = await pinterest(url);

    if (!data) {
      return res.status(404).json({
        error: "No data found for the provided URL",
      });
    }

    // Return the fetched data
    res.status(200).json({
      status: "success",
      videoUrl: data.video, // Assuming the response contains `data.video` for video URL
      imageUrls: data.images, // Assuming the response contains `data.images` for image URLs
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while processing your request",
    });
  }
};

if (require.main === module) {
  app.get('/pinterest', module.exports);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
