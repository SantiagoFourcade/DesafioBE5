const app = require("../app")

const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.render("page/index")

    next()
})

router.get("/productos", (req, res, next) => {
    res.render("page/productos")

    next()
})

router.get("/contact", (req, res, next) => {
    res.render("page/contact")

    next()
})

module.exports = router