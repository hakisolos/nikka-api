/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url; // Changed from `urls` to `url`
  const apiKey = req.query.apiKey;

  if (!url) {
    return res.status(400).json({
      error: "provide url"
    });
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "Input Parameter Apikey!"
    });
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "apikey invalid or not found"
    });
  }

  let apiUrl = `https://api.agatz.xyz/api/tiktok?url=${url}`; // Updated to use `url`

  try {
    const response = await axios.get(apiUrl);
    const data = response.data.data;
    const videoUrlNoWatermark = data.data.find(item => item.type === "nowatermark").url;

    res.status(200).json({
      data: videoUrlNoWatermark
    });
  } catch (error) {
    res.status(500).json({
      error: "err, fedk up"
    });
  }
};
