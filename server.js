const express = require('express')
const app = express()
const port = process.env.PORT || 1111

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", express.static(__dirname + "/public"))
app.use('/', require('./routes/index'))
app.get('/review', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.listen(port, () => { console.log("server started at http://localhost:1111") })
