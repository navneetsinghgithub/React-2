const usersModels = require("../model/usersModels")


module.exports = {
    addUser: async (req, res) => {
        try {
            const addUser = await usersModels.create({
                name: req.body.name, lastname: req.body.lastname,
                email: req.body.email, password: req.body.password,
                contact: req.body.contact, image: req.body.image,
            })
            return res.json({
                message: "add users",
                status: 200,
                body: addUser
            })
        } catch (error) {
            console.log(error, "error");
        }
    },
    getUsers: async (req, res) => {
        try {
            const getUsers = await usersModels.find()
            return res.json({
                message: "get all users",
                status: 200,
                body: getUsers
            })
        } catch (error) {
            console.log(error, "error");
        }
    }
}