$(function () {
    loadsurvey()
})


async function loadsurvey() {
    await $.get('/submit', (surveyinfo) => {
        console.log(surveyinfo.firstname)
        $('#survey').append(
            $(`
            <div class="form-group">
            <div class="form-row ">
                <div class="form-group col-md-6">
                    <label for="Firstname">First Name</label>
                    <input type="text" class="form-control" id="Firstname_s" name="firstname_s"
                        placeholder=${surveyinfo.firstname}>
                </div>
                <div class="form-group col-md-6">
                    <label for="Lastname">Lastname</label>
                    <input type="text" class="form-control" id="Lastname-s" name="lastname"
                        placeholder=${surveyinfo.lastname}>
                </div>
            </div>

            <label for="Email">Email address</label>
            <input type="email" class="form-control" placeholder=${surveyinfo.email}>
        </div>
        <div class="form-group">
            <label for="Age">Age</label>
            <select class="form-control" id="Age" name="age">
                <option>${surveyinfo.age}</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Rate">Rate our survey</label>
            <select class="form-control" id="" Rate" name="rate">
                <option>${surveyinfo.rate}</option>
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