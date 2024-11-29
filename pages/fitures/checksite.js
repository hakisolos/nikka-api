const axios = require("axios");

// Allowed API keys
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url; // The website URL to scrape
  const apiKey = req.query.apiKey; // The API key for authorization

  // Validate input
  if (!url) {
    return res.status(400).json({
      error: "Please provide a URL"
    });
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "API key is missing"
    });
  }

  if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "Invalid API key"
    });
  }

  // Encode URL to ensure it's in a valid format for the target API
  const encodedUrl = encodeURIComponent(url);

  // Construct the URL for the API
  const apiUrl = `https://itzpire.com/tools/about-website?url=${encodedUrl}`;

  try {
    // Send GET request to the external API
    const response = await axios.get(apiUrl);

    // Check if the request was successful
    if (response.data.status === "success") {
      const data = response.data.data;

      // Extract relevant data from the response
      const result = {
        title: data.title || "No title available",
        description: data.description || "No description available",
        favicon: data.favicon || "No favicon available",
        isCloudflare: data.is_cloudflare,
        summary: data.summary || "No summary available"
      };

      // Send the extracted data back as JSON
      return res.status(200).json(result);
    } else {
      return res.status(500).json({
        error: "Failed to scrape website data"
      });
    }
  } catch (error) {
    // Handle errors from the external API or network issues
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while processing your request"
    });
  }
};
