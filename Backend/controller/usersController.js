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
            // console.log(error, "error")
            return res.json({
                message: "error not added user"
            })
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
            // console.log(error, "error");
            return res.json({
                message:"error not get users"
            })
        }
    },

    getSingleUsers: async (req, res) => {
        try {
            const getSingleUsers = await usersModels.findOne({
                _id: req.params.id
            })
            return res.json({
                message: "get single users",
                status: 200,
                body: getSingleUsers
            })
        } catch (error) {
            // console.log(error, "error")
            return res.json({
                message: "error single user"
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            const updateUser = await usersModels.findByIdAndUpdate({
                _id: req.params.id
            }, {
                name: req.body.name, lastname: req.body.lastname,
                email: req.body.email,
            }, { new: true })
            return res.json({
                message: "updated user success",
                status: 200,
                body: updateUser
            })
        } catch (error) {
            console.log(error, "error")
            return res.json({
                message: "error not updated",
                status: 400,
                body: {}
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deleteUser = await usersModels.findByIdAndDelete({
                _id: req.params.id
            })
            return res.json({
                message: "success deleted user",
                status: 200,
                body: deleteUser
            })
        } catch (error) {
            // console.log(error, "error")
            return res.json({
                message: "error not  deleted",
                status: 400,
                body: {}
            })
        }
    }
}