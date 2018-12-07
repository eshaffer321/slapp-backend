const db = require('../../db/models/index');
const authController = require('../controllers/AuthController');

exports.announcement_pinned_get = function (req, res) {
    db.User.count({where: {id: req.query.google_id}}).then(count => {
        if (count === 0) {
            res.status(400);
            res.send('User not found');
        }
        db.UserSchool.count({where: {google_id: req.query.google_id}}).then(count => {
            if (count === 0) {
                res.status(400);
                res.send('No schools associated with that user');
            }
        });
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });

    db.User.findAll({
        where: {id: req.query.google_id},
        include: [
            {
                model: db.School,
                attributes: ['school_name'],
                through: {attributes: []},
                include: [{
                    model: db.Announcement,
                    attributes: ['message'],
                    where: {
                        pinned: true,
                    },
                    include: [{
                        model: db.User,
                        attributes: ['first_name', 'last_name']
                    }]
                }]
            },
        ],
        attributes: ['first_name', 'last_name'],
    }).then(data => {
        res.send(data[0]);
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_all_get = function (req, res) {
    db.User.count({where: {id: req.query.google_id}}).then(count => {
        if (count === 0) {
            res.status(400);
            res.send('User not found');
            res.end();
        }
        db.UserSchool.count({where: {google_id: req.query.google_id}}).then(count => {
            if (count === 0) {
                res.status(400);
                res.send('No schools associated with that user');
                res.end();
            }
        });
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });

    db.User.findAll({
        where: {id: req.query.google_id},
        include: [
            {
                model: db.School,
                attributes: ['school_name'],
                through: {attributes: []},
                include: [{
                    model: db.Announcement,
                    attributes: ['message'],
                    include: [{
                        model: db.User,
                        attributes: ['first_name', 'last_name']
                    }]
                }]
            },
        ],
        attributes: ['first_name', 'last_name'],
    }).then(data => {
        res.send(data[0]);
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_create_post = function (req, res) {
    console.log('called');
    db.User.count({
        where: {
           google_id: req.body.google_id
        }
    }).then(count => {
        console.log(count);
        if (count === 0) {
            res.status(400);
            res.send("User not found.");
        } else {
            db.Announcement.create({
                message: req.body.message,
                google_id: req.body.google_id,
                school_id: req.body.school_id,
                updated_at: null
            }).then(announcement => {
                res.status(200);
                res.send('Your announcement has successfully been created.');
            }).catch(function (err) {
                res.send('Something went wrong...' + err);
            });
        }
    }).catch(function (err) {
        res.status(400);
        res.send(err);
    });
};

exports.announcement_update_post = function (req, res) {
    db.Announcement.findOne({
        where: {
            id: req.body.announcement_id
        }
    }).then(announcement => {
        announcement.update({
            message: req.body.message
        }).catch(function (err) {
            res.send('Something went wrong...' + err);
            res.status(400);
        });
        res.status(200);
        res.send('Successfully updated announcement.');
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_delete_post = function (req, res) {
    db.Announcement.destroy({
        where: {
            id: req.body.announcement_id
        }
    }).then(data => {
        res.send('Successfully deleted announcement');
    }).catch(function (err) {
        res.status = 400;
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_pin_post = function (req, res) {
    db.Announcement.findOne({
        where: {
            id: req.body.announcement_id,
        }
    }).then(announcement => {
        announcement.update({
            pinned: true
        }).then(data => {
            res.send(data);
        }).catch(function (err) {
            res.status(400);
            res.send(err);
        })
    }).catch(function (err) {
        res.status(400);
        res.send(err);
    });
};

exports.announcement_unpin_post = function (req, res) {
    db.Announcement.findAll({
        where: {
            id: req.body.announcement_id,
        }
    }).then(announcement => {
        announcement.update({
            pinned: false
        }).then(data => {
            res.send(data);
        }).catch(function (err) {
            res.status(400);
            res.send(err);
        })
    }).catch(function (err) {
        res.status(400);
        res.send(err);
    });
};
