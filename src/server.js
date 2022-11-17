const app = require("./app/add")

const port = app.get("port")

app.listen(8080, () => {
    console.log(`-----Server running on port ${port}----`)
})