const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url;
  const apiKey = req.query.apiKey;

  if (!url) {
    return res.status(400).json({ error: "Please provide a URL" });
  }

  if (!apiKey) {
    return res.status(403).json({ error: "API key is missing" });
  }

  if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  const encodedUrl = encodeURIComponent(url);
  const apiUrl = `https://itzpire.com/tools/about-website?url=${encodedUrl}`;

  try {
    console.log(`Requesting URL: ${apiUrl}`);
    const response = await axios.get(apiUrl, { timeout: 10000 }); // 10 seconds timeout

    if (response.data.status === "success") {
      const data = response.data.data;
      const result = {
        title: data.title || "No title available",
        description: data.description || "No description available",
        favicon: data.favicon || "No favicon available",
        isCloudflare: data.is_cloudflare,
        summary: data.summary || "No summary available"
      };

      return res.status(200).json(result);
    } else {
      return res.status(500).json({ error: "Failed to scrape website data" });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return res.status(500).json({ error: "An error occurred while processing your request" });
  }
};
