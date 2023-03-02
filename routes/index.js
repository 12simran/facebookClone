const express = require('express')
 const homeController = require('../controllers/homeController')

const router = express.Router()

console.log("router is working");

router.get('/',homeController.home)

module.exports = router

