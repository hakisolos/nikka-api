const axios = require("axios");

module.exports = async (req, res) => {
  const imageUrl = req.query.url;

  if (!imageUrl) {
    return res.status(400).json({
      error: "Please provide a valid image URL.",
    });
  }

  try {
    const apiUrl = `https://rest.cifumo.biz.id/api/ai/upscale?url=${encodeURIComponent(imageUrl)}`;
    const response = await axios.get(apiUrl);

    const data = response.data;

    if (data.status && data.data) {
      return res.status(200).json({
        message: "Image upscale successful.",
        data: data.data,
      });
    } else {
      return res.status(400).json({
        error: "Failed to upscale the image. No data returned by the API.",
        apiResponse: data, // Log full API response for debugging
      });
    }
  } catch (error) {
    console.error("Upscale API Error:", error.response?.data || error.message);
    return res.status(500).json({
      error: "There was an error processing the request. Please try again later.",
    });
  }
};
