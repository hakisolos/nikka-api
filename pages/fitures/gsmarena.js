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
// https://api.siputzx.my.id/api/ai/teachanything?content=hai
  const url = `https://api.siputzx.my.id/api/s/gsmarena?query=${q}`
 // https://api.giftedtech.my.id/api/search/happymod?apikey=gifted&query=
  try {
    const response = await axios.get(url) // Make the API request
    const data = response.data // Extract the data from the response
// SO IF THE API SAYS RESULTS THERE 
    const info = {
      Founder: "H4KI XER", // Only include H4KI XER
      company: "Nikka Botz Inc",
      data: data // Assign the fetched data here
    }
 // CHANGE THIS DATA.DATA AND SO ON 
//MAKE SURE YOU CHECK JSON RESPONSE 
//TAKE NOTE OF THIS
    res.status(200).json(info) // Send the response
  } catch (error) {
    res.status(500).json({
      error: "Error: Request failed",
      details: error.message // Include error details for debugging
    })
  }
}
