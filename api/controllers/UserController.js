const db = require('../../db/models/index');

exports.user_smoke_test_get = function(req, res) {
    db.User.findAll({}).then(user => {
        res.json(user[0]);
    });
};

exports.user_create_post = function(req, res) {
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        role_id: req.body.role,
        school_id: req.body.school_id,
        google_token: req.body.google_token
    }).then(user => {
        res.send('Successfully created user.')
    }).catch(function(err) {
        res.send('Something went wrong... ' + err);
    });
};

exports.user_update_post = function(req, res) {
    db.User.findOne({
        where: {
            id: req.body.user_id
        }
    }).then(user => {
        console.log(req.body.first_name);
        user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            google_token: req.body.google_token,
            cookie: req.body.cookie
        }).catch(function(err) {
            res.status(400);
            res.send('Something went wrong...' + err);
        });
        res.status(200);
        res.send('Successfully updated user.');
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.user_token_get = function(req, res) {
    // TODO: implement
};

exports.user_delete_post = function(req, res) {
    db.User.destroy({
        where: {user_id: req.body.user_id}
    }).then(user => {
        res.send('Successfully deleted user.');
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
    });
};
