const axios = require("axios");

module.exports = async (req, res) => {
  const imageUrl = req.query.url; // Expect the image URL in the query string
  const apiKey = req.query.apiKey; // Optional: if the API requires a key

  // Validate input
  if (!imageUrl) {
    return res.status(400).json({
      error: "Please provide a valid image URL.",
    });
  }

  try {
    // Send request to the upscale API
    const apiUrl = `https://rest.cifumo.biz.id/api/ai/upscale?url=${encodeURIComponent(imageUrl)}`;
    const response = await axios.get(apiUrl);

    // Handle API response
    const data = response.data;

    if (data.status && data.data) {
      return res.status(200).json({
        message: "Image upscale successful.",
        data: data.data, // Include upscaled image data in the response
      });
    } else {
      return res.status(400).json({
        error: "Failed to upscale the image. No data returned by the API.",
        apiResponse: data, // Include API response for debugging
      });
    }
  } catch (error) {
    console.error("Upscale API Error:", error.response?.data || error.message);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later.",
    });
  }
};
