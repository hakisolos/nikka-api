const axios = require("axios")
const allowedApiKeys = require("../../declaration/arrayKey.jsx")

module.exports = async (req, res) => {
  const q = req.query.q
  const apiKey = req.query.apiKey

  if (!q) {
    return res.status(400).json({
      error: "Provide query"
    })
  }

  if (!apiKey) {
    return res.status(403).json({
      error: "Input parameter 'apiKey'!"
    })
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "API key not found"
    })
  }

  const url = `https://api.siputzx.my.id/api/s/duckduckgo?query=${q}`

  try {
    const response = await axios.get(url) 
    const data = response.data
 
    const info = {
      Founder: "H4KI XER", 
      company: "Nikka Botz Inc",
      data: data 
    }
 
    res.status(200).json(info) 
  } catch (error) {
    res.status(500).json({
      error: "Error: Request failed",
      details: error.message 
    })
  }
}
