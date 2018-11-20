const router = require('express').Router();
const passport = require('passport');
const keys = require('../config/keys');

const {OAuth2Client} = require('google-auth-library');
const googleAuth = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle w/ passport
    res.send('logout')
});

// auth w/ google
router.get('/google', passport.authenticate('google', {
    //scope: ['profile']
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the callback URI');
});

router.post('/verify/google', (req, res) => {
    console.log(req);
    // verify w/ google-auth-library
    googleAuth.verifyIdToken({
        idToken: req.query.idToken,
        audience: keys.google.clientID
    }).then((cb) => {
        // on success, add user to db if does not exist
        res.status(200);
        res.send("success");

    }).catch((err) => {
        console.log(err);
    })

});

module.exports = router;