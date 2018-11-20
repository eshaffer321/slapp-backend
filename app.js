const express = require("express");
const app = express();
const auth = require('./routes/auth-routes');
const passport = require('./config/passport-setup');

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', auth);



// create home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('live on 3000');
});
