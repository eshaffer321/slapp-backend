const db = require('../../db/models/index');

exports.user_smoke_test_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ');
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
    res.send('NOT IMPLEMENTED: ');
};

exports.user_token_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
