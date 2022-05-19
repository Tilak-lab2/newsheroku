const express=require('express')
require('dotenv').config()
const port=process.env.PORT||7000
const path=require('path')
const db=require("./config/mongoose")
const app=express()
const passport=require('passport')
const session=require('express-session')
const passportLocal=require("./config/passport")
const MongoStore=require('connect-mongo')(session)
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.set('view engine','ejs')
app.set('views',path.join(__dirname ,'./views'))

app.use(express.urlencoded({extended:true}))
app.use(expressLayouts);
app.use(session({
    secret:process.env.SESSION_COOKIE,
    resave:false,
    saveUninitialized:true,
    cookie:{ maxAge: (1000 * 60 * 100)},
    store:new MongoStore({
        mongooseConnection:db,
        autoRemove: 'disabled',
    },
    function(err){
        console.log(err ||  'connect-mongodb setup ok');
    }
    )
}))

// For using CSS and JS 
app.use(express.static('./assets'))

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// For authentication passport


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash())
// to use flash as middleware
app.use(customMware.setFlash);



app.use(express.urlencoded({extended:false}))
app.use("/",require("./routes/app"))
app.use("/news",require("./routes/index"))
app.listen(port,()=>{
    console.log(`Running on localhost${port}`)
})