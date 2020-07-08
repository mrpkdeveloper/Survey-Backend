$(function () {
    console.log("before load survey")
    loadsurvey()
        .then(() => {

            console.log("after loadsurvey")
            let fname = $('#Firstname_s')
            let lname = $('#Lastname-s')
            let email = $('#email')
            let age = $('#Age')
            let rate = $('#Rate')
            let feedback = $('#FeedBack')
            let submit = $('#submit')

            submit.click(function () {
                console.log(id_update)
                console.log(fname)
                console.log(feedback.val())
                let surveyinfo = {
                    id: id_update,
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
        })


}
)


async function loadsurvey() {
    await $.get('/submit', (surveyinfo) => {
        // console.log(surveyinfo[0].firstname)
        console.log("in loadsurvey")
        id_update = surveyinfo[0].id
        $('#survey').append(
            $(`
            <div class="form-group">
            <div class="form-row ">
                <div class="form-group col-md-6">
                    <label for="Firstname">First Name</label>
                    <textarea type="text" class="form-control" id="Firstname_s" name="firstname_s"
                     rows="1">${surveyinfo[0].firstname}</textarea>

                </div>
                <div class="form-group col-md-6">
                    <label for="Lastname">Lastname</label>
                    <textarea rows="1" type="text" class="form-control" id="Lastname-s" name="lastname">${surveyinfo[0].lastname}</textarea>
                </div>
            </div>

            <label for="Email">Email address</label>
            <textarea rows="1" type="email" class="form-control" id="email">${surveyinfo[0].email}</textarea>
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
        id: a.id,
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