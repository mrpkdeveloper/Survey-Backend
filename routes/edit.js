const { Router } = require('express')
const { surveyinfo } = require('../db')
const route = Router()

// route.get('/', (req, res) => {
//     res.send("form submitted successfully")
// })

// function data(req, res, next) {
//     // console.log(req)
//     console.log(req.query.firstname)
//     // for (let q in req.query) {
//     // console.log(req.query[q])
//     // }
//     next()
// }

// route.get('/', (req, res) => {
//     // res.sendFile(__dirname + "../public/review.html")
//     res.sendFile('review.html', { root: path.join(__dirname, '../public') });
//     // res.send("___result___via get")
// })


route.post('/', (req, res) => {
    surveyinfo.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
        rate: req.body.rate,
        feedback: req.body.feedback
    }, {
        where: {
            id: req.body.id
        }
    })
        .then((surveyinfo) => {
            res.status(201).send(surveyinfo)

        })
        .catch((err) => {
            res.status(501).send({ error: "could not able to update survey" })
        })
})
module.exports = route