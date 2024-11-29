const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const prompt = req.query.prompt;  // The animation prompt (e.g., "Alya")
  const apiKey = req.query.apiKey;  // API key for authorization

  // Check if prompt and API key are provided
  if (!prompt) {
    return res.status(400).json({
      error: "Please provide a prompt for the animation."
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

  // URL for the AI animation API
  const apiUrl = `https://itzpire.com/ai/animate-diff?prompt=${encodeURIComponent(prompt)}`;

  try {
    // Make the request to the animation API
    const response = await axios.get(apiUrl);

    // Check if the response contains the animation result
    if (response.data && response.data.status === "success") {
      return res.status(200).json({
        status: "success",
        animationData: response.data  // The animation result from the API
      });
    } else {
      return res.status(400).json({
        error: "Invalid response or animation data not found."
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later."
    });
  }
};
