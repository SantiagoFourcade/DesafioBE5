const express = require("express")
const morgan = require("morgan")

const router = require("./routerr/router")

const app = express()
const statics =__dirname.replace("app", "public")

console.log("static")

app.set("port", process.env.PORT)
app.set("views", "./src/public/views")
app.set("view engine", "pug")

app.use(morgan("nodemon"))
app.use(express.static(statics))
app.use(router)



module.exports = app