const express = require('express')
const router = express.Router()
const FormController = require('../controllers/RegistrationController')



router.post('/',FormController.store)
router.get('/',FormController.fetch)

module.exports = router


