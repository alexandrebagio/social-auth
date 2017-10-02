var passport = require('passport');
var passportfacebook =  require('passport-facebook').Strategy;
var passporttwitter = require('passport-twitter').Strategy;
var passportgoogle = require('passport-google-oauth').OAuth2Strategy;

var loginStrategy = require('./login-strategy');

module.exports = () => {
    // Passport session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    // facebook strategy
    passport.use(
        new passportfacebook(loginStrategy.facebook, 
        (accessToken, refreshToken, profile, done) => {
            process.nextTick( () => {
                return done(null, profile);
            });
        })
    );
    // end face strategy 

    // twitter strategy
    passport.use(new passporttwitter(loginStrategy.twitter,
        (token, tokenSecret, profile, done) => {
            process.nextTick( () => {
                return done(null, profile);
            });
        })
    );
    // end twitter strategy

    // google strategy
    passport.use(new passportgoogle(loginStrategy.google,
        (token, refreshToken, profile, done) => {
            process.nextTick(function() {
                return done(null, profile);
            });
        })
    );
    // end google strategy

    return passport;
};