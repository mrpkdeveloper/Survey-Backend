$(
    function () {
        let fname = $("#Firstname")
        let lname = $("#Lastname")
        let email = $("#Email")
        let age = $("#Age")
        let rate = $("#Rate")
        let feedback = $("#Feedback")
        let review_btn = $("#review")
        let submit_btn = $("#submit")

        review_btn.click(function () {
            let surveyinfo = {
                firstname: fname.val(),
                lastname: lname.val(),
                email: email.val(),
                age: age.val(),
                rate: rate.val(),
                feedback: feedback.val(),

            }
            console.log("button clicked")

            addsurvey(surveyinfo, function (addedsurvey) {
                // window.alert(" added " + addedsurvey.firstname + " to the database ")
                window.location.href = "./review.html"

            })


            // getsurvey(function (info) {
            //     console.log(info[0].firstname)
            //     for (i in info) {
            //         console.log(info[i])
            //     }
            // })

        })

    }
)


function addsurvey(a, done) {
    $.post('/submit', {
        firstname: a.firstname,
        lastname: a.lastname,
        email: a.email,
        age: a.age,
        rate: a.rate,
        feedback: a.feedback,
    }, function (data) {
        done(data)
    })
}

// function getsurvey(done) {
//     $.get('/submit', function (data) {
//         // console.log(data)
//         done(data)
//     })
// }