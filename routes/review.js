const { Router } = require('express')
const { surveyinfo } = require('../db')
const path = require('path')
const route = Router()

// route.get('/', (req, res) => {
//     res.send("form submitted successfully")
// })

route.get('/', (req, res) => {
    // res.sendFile(__dirname + "../public/review.html")
    // res.sendFile('review.html', { root: path.join(__dirname, '../public') });
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="./review.js"></script>
    </head>
    
    <body>
        <h1 class=" text-center">Review</h1>
        <form>
        <div class="container my-4">
        <div class="form-group">
                <div class="form-row ">
                <div class="form-group col-md-6">
                <label for="Firstname">First Name</label>
                <input type="text" class="form-control" id="Firstname_s" name="firstname_s"
                placeholder=${req.query.firstname}>
                </div>
                <div class="form-group col-md-6">
                <label for="Lastname">Lastname</label>
                <input type="text" class="form-control" id="Lastname-s" name="lastname" placeholder=${req.query.lastname}>
                </div>
                </div>
                
                <label for="Email">Email address</label>
                <input type="email" class="form-control"  placeholder=${req.query.email}>
                </div>
                <div class="form-group">
                <label for="Age">Age</label>
                <select class="form-control" id="Age" name="age">
                <option>${req.query.age}</option>
                </select>
                </div>
                <div class="form-group">
                <label for="Rate">Rate our survey</label>
                <select  class="form-control" id="" Rate" name="rate">
                <option>${req.query.rate}</option>
                </select>
                </div>
                <div class="form-group">
                <label for="FeedBack">FeedBack</label>
                <textarea  class="form-control" id="FeedBack" name="feedback" rows="3">${req.query.feedback}</textarea>
                </div>
                </div>
                
                <button type="submit" name="submit" id="submit" formaction="/submit" formmethod="POST">Submit</button>
                </form>
    </body>
    
    </html>`)
})
module.exports = route