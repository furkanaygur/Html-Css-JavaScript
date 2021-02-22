const User = require("../models/user")
const asyncErrorWrapper = require("express-async-handler")
const CustomError = require("../helpers/error/CustomError")

const register = asyncErrorWrapper(async (req, res, next) => {

    const name = "Furkan Aygur4"
    const email = "admin4@admin.com"
    const password = "123"

    const user = await User.create({
        name,
        email,
        password
    })

    res.status(200).json(
        {
            success: true,
            data: user
        }
    )
})

const errorTest = (req, res, next) => {
    return next(new CustomError("CustomError message", 400))
}

module.exports = {
    register,
    errorTest
}