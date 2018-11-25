const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require('sequelize');


const router = require('./api/routes/index');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

app.use(function(err, req, res, next){
    res.status(400).json(err);
});

module.exports = app;
