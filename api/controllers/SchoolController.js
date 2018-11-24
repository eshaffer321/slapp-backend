const db = require('../../db/models/index');

exports.school_create_post = function(req, res) {
    db.School.create({
        school_name: req.body.school_name,
        district: req.body.district,
        hostname: req.body.hostname,
        token: req.body.token
    }).then(school => {
        res.json('Successfully created ' + school.school_name);
    }).catch(function (err) {
        res.status(400);
        res.json(err);
    })
};

exports.school_update_post = function(req, res) {
    db.School.findOne({
        where: {
            id: req.body.school_id
        }
    }).then(school => {
        school.update({
            district: req.body.district,
            school_name: req.body.school_name,
            hostname:req.body.hostname,
        }).catch(function(err) {
            res.send('Something went wrong...' + err);
            res.status(400);
        });
        res.status(200);
        res.send('Successfully updated school.');
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.school_delete_post = function(req, res) {
    db.School.destroy({
        where: {
            id: req.body.school_id
        }
    }).then(data => {
        res.send('Successfully deleted school');
    }).catch(function(err) {
        res.status = 400;
        res.send('Something went wrong...' + err);
    });
};
