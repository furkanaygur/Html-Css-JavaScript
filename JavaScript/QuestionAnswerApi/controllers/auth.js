const User = require("../models/user")
const asyncErrorWrapper = require("express-async-handler")
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers")

const register = asyncErrorWrapper(async (req, res, next) => {
    const { name, email, password, role } = req.body
    const user = await User.create({
        name,
        email,
        password,
        role
    })
    sendJwtToClient(user, res)
})

const tokenTest = (req, res, next) => {
    res.json({
        success: true,
        message: "Welcome"
    })
}

module.exports = {
    register,
    tokenTest
}