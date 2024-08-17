const express = require('express');


const router = express.Router()

// const article = require('./article_route')

const massage = require('./massage_item')

// router.use('/article', article)
router.use('/massage', massage)


module.exports = router