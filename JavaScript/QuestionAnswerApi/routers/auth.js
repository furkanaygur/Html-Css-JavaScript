const express = require("express")
const { register, tokenTest } = require("../controllers/auth")
const { getAccessToRoute } = require("../middlewares/authorization/auth")
const router = express.Router()

router.post("/register", register)
router.get("/tokenTest", getAccessToRoute, tokenTest)
module.exports = router