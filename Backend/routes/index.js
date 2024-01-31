var express = require('express');
var router = express.Router();

const controller = require("../controller/usersController")

router.post ("/addUser",controller.addUser)
router.get ("/getUsers",controller.getUsers)


module.exports = router;
