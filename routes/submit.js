const { Router } = require('express')
const { surveyinfo } = require('../db')

const route = Router()

// route.get('/', (req, res) => {
//     res.send("form submitted successfully")
// })

route.get('/', (req, res) => {
    surveyinfo.findAll()
        .then((survey) => {
            res.status(200).send(survey)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve survey"

            })
        })

})

route.post('/', (req, res) => {
    surveyinfo.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
        rate: req.body.rate,
        feedback: req.body.feedback
    })
        .then((surveyinfo) => {
            res.status(201).send(surveyinfo)
        })
        .catch((err) => {
            res.status(501).send({ error: "could not able to add survey" })
        })
})

module.exports = route