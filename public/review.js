$(function () {
    loadsurvey()
}
)


async function loadsurvey() {
    await $.get('/review', (surveyinfo) => {
        console.log(surveyinfo.firstname)
        console.log("in loadsurvey")
        $('#review').append(
            $(`
            <div class="form-group">
            <div class="form-row ">
                <div class="form-group col-md-6">
                    <label for="Firstname">First Name</label>
                    <textarea type="text" class="form-control" id="Firstname_s" name="firstname_s"
                     rows="1">${surveyinfo.firstname}</textarea>

                </div>
                <div class="form-group col-md-6">
                    <label for="Lastname">Lastname</label>
                    <textarea rows="1" type="text" class="form-control" id="Lastname-s" name="lastname">${surveyinfo.lastname}</textarea>
                </div>
            </div>

            <label for="Email">Email address</label>
            <textarea rows="1" type="email" class="form-control" id="email">${surveyinfo.email}</textarea>
        </div>
        <div class="form-group">
            <label for="Age">Age</label>
            <select class="form-control" id="Age" name="age">
                <option>${surveyinfo.age}</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Rate">Rate our survey</label>
            <select class="form-control" id="Rate" name="rate">
                <option>${surveyinfo.rate}</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="FeedBack">FeedBack</label>
            <textarea class="form-control" id="FeedBack" name="feedback" rows="3">${surveyinfo.feedback}</textarea>
        </div>
        
        `)
        )
    }
    )
}

// loadsurvey()

function addsurvey(a, done) {
    $.post('/edit', {
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