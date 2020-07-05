const { Router } = require('express')
const { surveyinfo } = require('../db')
const path = require('path')
const route = Router()

// route.get('/', (req, res) => {
//     res.send("form submitted successfully")
// })

route.get('/', (req, res) => {
    // res.sendFile(__dirname + "../public/review.html")
    res.sendFile('review.html', { root: path.join(__dirname, '../public') });
    // res.send()
})
module.exports = route