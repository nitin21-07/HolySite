const express = require('express')
const router = express.Router()
const bookSlotController = require('../controllers/bookSlotController')



router.post('/',bookSlotController.store)
router.get('/',bookSlotController.fetch)

module.exports = router


