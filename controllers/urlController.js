// Import the utility function
const generateShortCode = require("../utils/generateShortCode");

function shortenURL(req, res) {
    const { url } = req.body;

    // Validation
    if (!url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }
    const shortCode = generateShortCode();

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