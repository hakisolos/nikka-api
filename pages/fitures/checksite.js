const axios = require("axios")
const allowedApiKeys = require("../../declaration/arrayKey.jsx")

module.exports = async (req, res) => {

  const q = req.query.q
  const apiKey = req.query.apiKey

  if (!q) {
    return res.status(400).json({
      error: "provide query"
    })
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "Input Parameter Apikey!"
    })
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "apikey not found"
    })
  }

  const url = `https://api.agatz.xyz/api/ytsearch?message=${q}`
  const info = {
    creator: "H4KI XER",
    company: "Nikka Botz Inc".
    data: data.data
  };

  try {
    const response = await axios.get(url)
    const data = response.data
    res.status(200).json(info)
  } catch (error) {
    res.status(500).json({
      error: "err, fedk up"
    })
  }
}

