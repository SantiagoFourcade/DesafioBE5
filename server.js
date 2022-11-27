const express = require("express")

const productos = []


const app = express()

app.use(`/public`, express.static(`public`))

app.use(express.urlencoded({extended: true}))

app.set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
    res.render(`index`, {productos});
});

app.post(`/productos`, (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect(`/`)
});


const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidoren el puerto ${server.address().port}`)
})

server.on(`error`, error => console.log(`Error en servidro ${error}`))