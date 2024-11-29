const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const imageUrl = req.query.url;
  const apiKey = req.query.apiKey;

  // Check if the URL and API key are provided
  if (!imageUrl) {
    return res.status(400).json({
      error: "Please provide an image URL."
    });
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "API Key is required."
    });
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "Invalid API Key."
    });
  }

  // The new API endpoint
  const apiUrl = `https://rest.cifumo.biz.id/api/ai/upscale`;

  try {
    // Make a POST request to the new API
    const response = await axios.post(apiUrl, { url: imageUrl });
    const data = response.data;

    if (data.status) {
      // Check if data contains expected results
      return res.status(200).json({
        message: "Image upscale successful.",
        data: data.data
      });
    } else {
      return res.status(400).json({
        error: "Failed to upscale the image. Please try again."
      });
    }
  } catch (error) {
    console.error("Upscale API Error:", error.message);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later."
    });
  }
};
