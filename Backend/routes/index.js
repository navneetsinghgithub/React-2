var express = require('express');
var router = express.Router();

const controller = require("../controller/usersController")

router.post("/addUser", controller.addUser)
router.get("/getUsers", controller.getUsers)
router.get("/getSingleUsers/:id", controller.getSingleUsers)
router.put("/updateUser/:id", controller.updateUser)
router.delete("/deleteUser/:id", controller.deleteUser)



module.exports = router;
