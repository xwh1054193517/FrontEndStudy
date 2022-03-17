const express = require('express')
const router = express.Router()


router.use(function(req, res, next) {
    console.log('Time', Date.now());
    next
})

app.use('/', router)