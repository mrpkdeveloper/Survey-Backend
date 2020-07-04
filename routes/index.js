const route = require('express').Router()

//on requesting for /submit submit.js loads
route.use('/submit', require('./submit'))

//on requesting for /review review.js loads
route.use('/review', require('./review'))

// route.use('/private', require('./private'))

exports = module.exports = route