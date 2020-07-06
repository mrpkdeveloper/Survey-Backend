const { Router } = require('express')
const { surveyinfo } = require('../db')
const path = require('path')
const route = Router()

// route.get('/', (req, res) => {
//     res.send("form submitted successfully")
// })

function data(req, res, next) {
    // console.log(req)
    console.log(req.query.firstname)
    // for (let q in req.query) {
    // console.log(req.query[q])
    // }
    next()
}

route.get('/', (req, res) => {
    // res.sendFile(__dirname + "../public/review.html")
    res.sendFile('review.html', { root: path.join(__dirname, '../public') });
    // res.send("___result___via get")
})


route.post('/', data, (req, res) => {
    res.send("_________result_____________")
})
module.exports = route