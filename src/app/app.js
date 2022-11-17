const express = require("express")
const morgan = require("morgan")

const app = express()
const static =__direname

console.log("static")

app.set("port", process.env.PORT)
app.set("views", "./src/public/views")
app.set("view engine", "pug")

app.use(morgan("nodemon"))

app.get("/", (req, res) => {
    res.render("pages/index")
})

module.exports = app