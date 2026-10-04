const express = require('express')
const router = express.Router()

const {enter, check, exit} = require('../controllers/authController')

router.post('/enter',enter)
router.get('/check',check)
router.get('/exit',exit)

module.exports = router
