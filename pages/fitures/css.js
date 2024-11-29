const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const prompt = req.query.prompt; // CSS animation type or description (e.g., "ball")
  const apiKey = req.query.apiKey; // API key for validation

  // Check if prompt and API key are provided
  if (!prompt) {
    return res.status(400).json({
      error: "Please provide a prompt for the CSS animation."
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

  // URL for the CSS animation tool API
  const apiUrl = `https://itzpire.com/tools/css-animation?prompt=${encodeURIComponent(prompt)}`;

  try {
    // Make the request to the CSS animation API
    const response = await axios.get(apiUrl);
    
    // Check if the response contains CSS animation code
    if (response.data.status === "success" && response.data.code === 200) {
      // Assuming the response data has CSS animation code (if available)
      res.status(200).json({
        status: "success",
        cssCode: response.data.css_code || "No CSS animation code found."
      });
    } else {
      return res.status(400).json({
        error: "Invalid response or no animation code found for the given prompt."
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later."
    });
  }
};
