const Registration = require('../model/registerForm')



const store = (req,res,next) => {
    let form = new Registration({
        name : req.body.name,
        email : req.body.email,
        phone: req.body.phone,
        message : req.body.message,
        subject : req.body.subject
    })

    form.save()
    .then(()=> {
        res.json({
            message : "Registered Successfully"
        })
    })
    .catch(()=>{
        res.json({
            message : "An Error Occured"
        })
    })
}

const fetch = (req,res) => {
    Registration.find()
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