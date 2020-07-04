const route = require('express').Router()

//on requesting for /submit submit.js loads
route.use('/submit', require('./submit'))

//on requesting for /login login.js loads
// route.use('/login', require('./login'))

// route.use('/private', require('./private'))

exports = module.exports = route