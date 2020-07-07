$(function () {
    loadsurvey()
})

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
            <input type="email" class="form-control" placeholder=${surveyinfo[0].email}>
        </div>
        <div class="form-group">
            <label for="Age">Age</label>
            <select class="form-control" id="Age" name="age">
                <option>${surveyinfo[0].age}</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Rate">Rate our survey</label>
            <select class="form-control" id="" Rate" name="rate">
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