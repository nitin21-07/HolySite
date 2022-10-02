const bookSlot = require('../model/bookSlot')



const store = (req,res,next) => {
    let form = new bookSlot({
        name : req.body.name,
        email : req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        noOfPeople: req.body.noOfPeople,
        message : req.body.message,
    })

    form.save()
    .then(()=> {
        res.json({
            message : "Slot Booked Successfully"
        })
    })
    .catch(()=>{
        res.json({
            message : "An Error Occured"
        })
    })
}

const fetch = (req,res) => {
    bookSlot.find()
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
