$(function () {
    loadsurvey()

    let fname = $('#Firstname_s')
    let lname = $('#Lasttname_s')
    let email = $('#email')
    let age = $('#Age')
    let rate = $('#Rate')
    let feedback = $('#Feedback')
    let submit = $('#submit')

    submit.click(function () {
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
            window.alert(" Updated " + addedsurvey.firstname + " to the database ")
            // window.location.href = "./review.html"

        })
    })

}
)


function loadsurvey() {
    $.get('/submit', (surveyinfo) => {
        console.log(surveyinfo[0].firstname)
        $('#survey').append(
            $(`
            <div class="form-group">
            <div class="form-row ">
                <div class="form-group col-md-6">
                    <label for="Firstname">First Name</label>
                    <input type="text" class="form-control" id="Firstname_s" name="firstname_s"
                        placeholder=${surveyinfo[0].firstname}>
                </div>
                <div class="form-group col-md-6">
                    <label for="Lastname">Lastname</label>
                    <input type="text" class="form-control" id="Lastname-s" name="lastname"
                        placeholder=${surveyinfo[0].lastname}>
                </div>
            </div>

            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder=${surveyinfo[0].email}>
        </div>
        <div class="form-group">
            <label for="Age">Age</label>
            <select class="form-control" id="Age" name="age">
                <option>${surveyinfo[0].age}</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Rate">Rate our survey</label>
            <select class="form-control" id="Rate" name="rate">
                <option>${surveyinfo[0].rate}</option>
            </select>
        </div>
        <div class="form-group">
            <label for="FeedBack">FeedBack</label>
            <textarea class="form-control" id="FeedBack" name="feedback" rows="3">${surveyinfo[0].feedback}</textarea>
        </div>
        
        `)
        )
    }
    )
}

// loadsurvey()

function addsurvey(a, done) {
    $.post('/review', {
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