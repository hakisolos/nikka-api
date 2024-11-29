const axios = require("axios");
const allowedApiKeys = require("../../declaration/arrayKey.jsx");

module.exports = async (req, res) => {
  const url = req.query.url; // Changed from `urls` to `url`
  const apiKey = req.query.apiKey;
