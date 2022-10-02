const enquiryForm = require('../model/enquiryForm')



const store = (req,res,next) => {
    let form = new enquiryForm({
        name : req.body.name,
        email : req.body.email,
        phone: req.body.phone,
        category: req.body.category,
        message : req.body.message,
    })

    form.save()
    .then(()=> {
        res.json({
            message : "Enquiry Form Submitted Successfully"
        })
    })
    .catch(()=>{
        res.json({
            message : "An Error Occurred"
        })
    })
}

const fetch = (req,res) => {
    enquiryForm.find()
    .then((response) => {
        res.json({
            response
        })
    })
    .catch(() => {
        res.json({
            message : "An Error Occured"
        })
    })

}

module.exports = {
    store, fetch
}
