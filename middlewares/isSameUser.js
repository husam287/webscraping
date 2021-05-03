const uError = require("../utils/uError");

module.exports = (req, res, next) => {
    if(req.userId !==req.params.id) uError(403,'Not allowed');

    next();
  
};
