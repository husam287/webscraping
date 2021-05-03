const router = require("express").Router();
const controller = require("../controllers/test");


router.post("/test",[],controller.test);


module.exports = router;