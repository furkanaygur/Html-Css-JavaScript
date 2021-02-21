const accessControl = (req, res, next) => {
    // const access = false
    // if (!access) {
    //     res.status(401).json({
    //         "success": false,
    //         "message": "You are not autorized!"
    //     })
    // }

    console.log("Access Controll Middleware")
    next()
}

const defaultMiddleware = (req, res, next) => {
    console.log("Default Middleware")
    next()
}

module.exports = {
    accessControl,
    defaultMiddleware
}