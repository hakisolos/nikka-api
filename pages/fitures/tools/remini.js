const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url;
  const apiKey = req.query.apiKey;

  // Check if URL and API key are provided
  if (!url) {
    return res.status(400).json({
      error: "Please provide a URL."
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

  // URL for the Remini API
  const apiUrl = `https://itzpire.com/tools/remini2?url=${encodeURIComponent(url)}`;

  try {
    // Make request to the Remini API
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Check if the response contains a remini link
    if (data && data.url) {
      return res.status(200).json({
        reminiUrl: data.url,
      });
    } else {
      return res.status(400).json({
        error: "Could not process the request. Please check the URL or try again later.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later.",
    });
  }
};
