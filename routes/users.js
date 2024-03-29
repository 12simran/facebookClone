const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router();
const passport = require('passport')


router.get('/profile/:id',userController.profile)
router.get('/update/:id',userController.update)

router.get('/sign-up',userController.signUp)
router.get('/sign-in',userController.signIn)

router.post('/create',userController.create)
router.post('/signin',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),userController.login)

router.get('/logout',userController.logout)
    


module.exports = router 