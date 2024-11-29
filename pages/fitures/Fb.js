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

  // URL for the Facebook downloader API
  const apiUrl = `https://itzpire.com/download/facebook?url=${encodeURIComponent(url)}`;

  try {
    // Make request to the Facebook downloader API
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Check if the response contains a video or image link
    if (data.type === "video") {
      return res.status(200).json({
        type: "video",
        downloadUrl: data.video_url,
      });
    } else if (data.type === "image") {
      return res.status(200).json({
        type: "image",
        downloadUrl: data.image_url,
      });
    } else {
      return res.status(400).json({
        error: "Invalid content type or no content found.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later.",
    });
  }
};
