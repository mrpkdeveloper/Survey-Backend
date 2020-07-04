const express = require('express')
const app = express()

app.use("/", express.static(__dirname + "/public"))

app.listen(1111, () => { console.log("server started at http://localhost:1111") })