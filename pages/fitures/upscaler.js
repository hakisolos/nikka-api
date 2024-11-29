const axios = require("axios");

module.exports = async (req, res) => {
  const imageUrl = req.query.url;
  const apiKey = req.query.apiKey;

  // Validate input parameters
  if (!imageUrl) {
    return res.status(400).json({
      error: "Please provide a valid image URL.",
    });
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "API Key is required.",
    });
  }

  // API endpoint for the Ryzendesu API
  const apiUrl = `https://api.ryzendesu.vip/api/ai/remini?url=${encodeURIComponent(imageUrl)}&method=enhance`;

  try {
    // Make the API request
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`, // Add authorization header if required
      },
    });

    const data = response.data;

    // Check if the API response contains the enhanced image
    if (data.status && data.data) {
      return res.status(200).json({
        message: "Image enhancement successful.",
        enhancedImage: data.data,
      });
    } else {
      return res.status(400).json({
        error: "Failed to enhance the image.",
        apiResponse: data, // Log full API response for debugging
      });
    }
  } catch (error) {
    console.error("Enhance API Error:", error.response?.data || error.message);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later.",
    });
  }
};
