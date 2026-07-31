// Import the utility function
const generateShortCode = require("../utils/generateShortCode");
const urlDatabase = require("../database/urlDatabase");

function shortenURL(req, res) {
    const { url } = req.body;

    // Validation
    if (!url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }
    const shortCode = generateShortCode();

    // Save URL in memory
    urlDatabase[shortCode] = url;

    // Success Response
   res.json({
        message: "Short URL created successfully",
        originalUrl: url,
        shortCode: shortCode,
        shortUrl: `http://localhost:5000/${shortCode}`
    });
}

module.exports = {
    shortenURL
};