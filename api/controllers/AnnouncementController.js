const db = require('../../db/models/index');
const authController = require('../controllers/AuthController');

exports.announcement_pinned_get = function (req, res) {
    db.User.findOne({where: {email: req.query.email}}).then(user => {
        if (!user) {
            res.status(400);
            res.send('User not found');
        }
        db.UserSchool.count({where: {user_id: user.id}}).then(userschool => {
            if (!userschool) {
                res.status(400);
                res.send('No schools associated with that user');
                res.end();
            } else {
                db.User.findAll({
                    where: {email: req.query.email},
                    include: [
                        {
                            model: db.School,
                            attributes: ['school_name'],
                            through: {attributes: []},
                            order: [
                                [{ model: db.Announcement }, 'id', 'ASC']
                            ],
                            include: [{
                                model: db.Announcement,
                                attributes: ['message', 'id', 'updated_at', 'created_at', 'pinned'],
                                where: {
                                    pinned: true
                                },
                                include: [{
                                    model: db.User,
                                    attributes: ['first_name', 'last_name', 'image_url']
                                }]
                            }]
                        },
                    ],
                    order: [
                        [db.School, { model: db.Announcement }, 'created_at', 'DESC']
                    ],
                    attributes: ['first_name', 'last_name'],
                }).then(data => {
                    console.log(data[0].Schools);
                    res.status(200);
                    res.send(data[0]);
                }).catch(function (err) {
                    res.send('Something went wrong...' + err);
                });
            }
        });
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_all_get = function (req, res) {
    db.User.findOne({where: {email: req.query.email}}).then(user => {
        if (!user) {
            res.status(400);
            res.send('User not found');
        }
        db.UserSchool.count({where: {user_id: user.id}}).then(userschool => {
            if (!userschool) {
                res.status(400);
                res.send('No schools associated with that user');
                res.end();
            } else {
                db.User.findAll({
                    where: {email: req.query.email},
                    include: [
                        {
                            model: db.School,
                            attributes: ['school_name'],
                            through: {attributes: []},
                            order: [
                                [{ model: db.Announcement }, 'id', 'ASC']
                            ],
                            include: [{
                                model: db.Announcement,
                                attributes: ['message', 'id', 'updated_at', 'created_at', 'pinned'],

                                include: [{
                                    model: db.User,
                                    attributes: ['first_name', 'last_name', 'image_url']
                                }]
                            }]
                        },
                    ],
                    order: [
                        [db.School, { model: db.Announcement }, 'created_at', 'DESC']
                    ],
                    attributes: ['first_name', 'last_name'],
                }).then(data => {
                    console.log(data[0].Schools);
                    res.status(200);
                    res.send(data[0]);
                }).catch(function (err) {
                    res.send('Something went wrong...' + err);
                });
            }
        });
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_create_post = function (req, res) {
    console.log('called');
    db.User.findOne({
        where: {
            email: req.body.email,
        },
        attributes: ['id']
    }).then(user => {
        if (!user) {
            res.status(400);
            res.send("User not found.");
        } else {
            db.Announcement.create({
                message: req.body.message,
                user_id: user.id,
                school_id: req.body.school_id,
                pinned: req.body.pinned,
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
        if (announcement) {
            announcement.update({
                pinned: true
            }).then(data => {
                res.status(200);
                res.send('Successfully pinned post: ' + req.body.announcement_id);
            }).catch(function (err) {
                res.status(400);
                res.send(err);
            })
        } else {
            res.status(400);
            res.send('Could not find announcement for given id ' + req.body.announcement_id);
        }

    }).catch(function (err) {
        res.status(400);
        res.send(err);
    });
};

exports.announcement_unpin_post = function (req, res) {
    db.Announcement.findOne({
        where: {
            id: req.body.announcement_id,
        }
    }).then(announcement => {
        if (announcement) {
            announcement.update({
                pinned: false
            }).then(data => {
                res.status(200);
                res.send('Successfully unpinned post: ' + req.body.announcement_id);
            }).catch(function (err) {
                res.status(400);
                res.send(err);
            })
        } else {
            res.status(400);
            res.send('Could not find announcement for given id ' + req.body.announcement_id);
        }

    }).catch(function (err) {
        res.status(400);
        res.send(err);
    });
};
