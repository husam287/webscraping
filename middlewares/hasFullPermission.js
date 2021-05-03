const uError = require("../utils/uError");
const Crew = require('../models/crew');

module.exports = (req, res, next) => {

    Crew.findById(req.userId)
    .then(user=>{
        if(!user) uError('User Not Found');

        if(user.permission < 2 ) uError(403,'Not Allowed');
        
        next();
    })
    .catch(err=>{
        next(err)
    })

};
