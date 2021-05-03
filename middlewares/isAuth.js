const uError = require("../utils/uError");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        let token = req.get("Authorization"); // From header
        if (!token) uError(401, "Unauthorized"); // Verify token existence
        token = token.split(" ")[1]; // Extract token after word "Bearer"

        // Verfication for the token
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) uError(400,"Invalid token");

            // Extract data from the token
            req.userId = decodedToken.userId;
            
            next();
        });
    } catch (err) {
        next(err);
    }
};
