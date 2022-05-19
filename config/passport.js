const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const bcrypt=require('bcrypt')
const User = require('../models/user');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    
    function(req, _email, password, done){
        // find a user and establish the identity
        
        User.findOne({email: req.body.email}, function(err, user)  {
            if (err){
                console.log('error', err);
                return done(err);
            }
            bcrypt.compare(password,user.password,(err,isMatch)=>{
              if(err)
              {
                  console.log("error",err)
                  req.flash("Error in Finding User")
              }
              if(isMatch){

                  return done(null,user)

              }
              else{
                  res.redirect('/sign-in')
                  return done(null,false,{message:"Password Incorrect"})
              }
            })


        
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}



module.exports = passport;