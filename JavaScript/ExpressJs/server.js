const express = require("express")
const { accessControl, defaultMiddleware } = require("./middleware")
const users = [
    {
        id: 1,
        name: "Furkan Aygur",
        place: "Istanbul"
    },
    {
        id: 2,
        name: "User2",
        place: "Ankara"
    }
]

const app = express()

const PORT = 5000

app.use(express.json())
// app.use(accessControl) // application scope

// get
app.get("/users", accessControl, defaultMiddleware, (req, res, next) => {
    res.json(
        {
            "success": true,
            "description": "GET Request",
            "data": users
        }
    )
})

// post
app.post("/users", (req, res, next) => {
    const user = req.body
    users.push(user)

    res.json(
        {
            "success": true,
            "description": "POST Request",
            "data": users
        }
    )
})


// put
app.put("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id)

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }

    res.json(
        {
            "success": true,
            "description": "PUT Request",
            "data": users
        }
    )
})


// delete
app.delete("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1)
        }
    }
    res.json(
        {
            "success": true,
            "description": "Delete Request",
            "data": users
        }
    )
})

app.listen(PORT, () => {
    console.log("Server Started PORT:" + PORT)
})