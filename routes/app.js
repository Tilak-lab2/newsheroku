const router=require('express').Router()

const homecontroller=require("../controllers/homecontroller")
const passport=require('passport')
router.get("/",passport.checkAuthentication,homecontroller.home)
router.get('/sign-in',homecontroller.signin)
router.get('/sign-up',homecontroller.signup)
router.get('/sign-out',homecontroller.signout)
router.post("/create",homecontroller.create)
router.post("/createSession",passport.authenticate(
    'local',
    {failureRedirect: '/sign-in',
    successFlash:true,
    failureFlash:true,

},
),homecontroller.createSession)
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/sign-in'}),homecontroller.createSession)
router.get('/profile/:id',homecontroller.profile)
// router.get("/profile/:id",homecontroller.update)
router.post("/update/:id",homecontroller.update)
module.exports=router
