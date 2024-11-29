/*
   * by balzz
   * dont delete my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url; // The URL of the site to screenshot
  const apiKey = req.query.apiKey;

  if (!url) {
    return res.status(400).json({
      error: "Provide a URL"
    });
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "Input parameter 'apiKey'!"
    });
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "API key invalid or not found"
    });
  }

  // Screenshot API URL
  const screenshotUrl = `https://ssweb-livid.vercel.app/ss?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios.get(screenshotUrl, { responseType: "stream" }); // Request image stream
    res.setHeader("Content-Type", "image/png"); // Set content type for PNG
    response.data.pipe(res); // Pipe the image stream to the client
  } catch (error) {
    res.status(500).json({
      error: "Error taking screenshot",
      details: error.message // Include error details for debugging
    });
  }
 
};











const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url;
  const apiKey = req.query.apiKey;

  if (!url) {
    return res.status(400).json({ error: "Provide a URL" });
  }

  if (!apiKey) {
    return res.status(403).json({ error: "Input parameter 'apiKey'!" });
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({ error: "API key invalid or not found" });
  }

  const screenshotUrl = `https://ssweb-livid.vercel.app/ss?url=${url}`;

  try {
    const response = await axios.get(screenshotUrl, { responseType: "stream" });
    res.setHeader("Content-Type", "image/png");
    response.data.pipe(res);
  } catch (error) {
    res.status(500).json({
      error: "Error taking screenshot",
      details: error.message
    });
  }
};
