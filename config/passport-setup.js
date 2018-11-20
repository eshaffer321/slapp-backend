const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, tokenHolder, profile, done) => {
        // passport callback function
        console.log("passport callback func fired");
        console.log(tokenHolder.id_token);
        //console.log(refreshToken);
        //console.log(accessToken);
        //console.log(profile)

    })
);