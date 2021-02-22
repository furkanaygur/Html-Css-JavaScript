const express = require("express")
const dontenv = require("dotenv")
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require("./middlewares/errors/customErrorHandler")
const routers = require("./routers")
// Env variables
dontenv.config({
    path: "./config/env/config.env"
})

// MongoDb Connection
connectDatabase()

const app = express()
const PORT = process.env.PORT

// routers
app.use("/api", routers)

// Error Handler
app.use(customErrorHandler)

// listen
app.listen(PORT, () => {
    console.log(`App start on PORT: ${PORT}  Enviroment: ${process.env.NODE_ENV}`)
})

