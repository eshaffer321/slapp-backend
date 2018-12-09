const db = require('../../db/models/index');

exports.user_get = function (req, res) {
    console.log(req.params);
    db.User.findOne({
        where: {email: req.params.email},
        attributes: ['first_name', 'last_name', 'email', 'id'],
        include: [{
            model: db.School,
            attributes: ['school_name', 'district', 'calendar_id']
        }]
    }).then(user => {
        res.send(user);
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
    });
};

exports.user_school_token_get = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    db.School.findOne({
        where: {admin_token: req.params.token},
        attributes: ['id']
    }).then(school => {
        if (school) {
            res.status(200);
            res.json({user: 'admin', school_id: school.id})
        } else {
            db.School.findOne({
                where: {
                    user_token: req.params.token
                }
            }).then(school => {
                if (school) {
                    res.send(JSON.stringify({
                        user: 'user',
                        school_id: school.id
                    }))
                } else {
                    res.status(400);
                    res.json({status: 400, message: 'Could not find a school associated with that token'})
                }
            }).catch(function (err) {
                res.status(400);
                res.send(err);
            });
        }
    }).catch(function (err) {
        res.send(err);
    });
};

exports.user_create_post = function (req, res) {
    db.User.count({
        where: {
            email: req.body.email,
        }
    }).then(count => {
        if (count > 0) {
            res.status(400);
            res.send("User already exists")
        } else {
            db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email
            }).then(user => {
                db.School.findOne({
                    where: {
                        admin_token: req.body.token
                    }
                }).then(data => {
                    if (data) {
                        db.UserSchool.create({
                            user_id: user.id,
                            school_id: req.body.school_id,
                            role: 'admin'
                        }).then(userschool => {
                            res.status(200);
                            res.end();
                        }).catch(function (err) {
                            res.status(400);
                            res.send("Error creating user school relation");
                        })
                    } else {
                        db.UserSchool.create({
                            user_id: user.id,
                            school_id: req.body.school_id,
                            role: 'user'
                        }).then(userschool => {
                            res.status(200);
                            res.end();
                        }).catch(function (err) {
                            res.status(400);
                            res.send("Error creating user school relation");
                        })
                    }
                }).catch(function (err) {

                });

            }).catch(function (err) {
                res.status(400);
                res.send("Error creating user")
            });
        }
    }).catch(function (err) {
        res.send(err);
    });
};

exports.user_update_post = function (req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        console.log(req.body.first_name);
        user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        }).catch(function (err) {
            res.status(400);
            res.send('Something went wrong...' + err);
        });
        res.status(200);
        res.send('Successfully updated user.');
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });
};

exports.user_delete_post = function (req, res) {
    db.User.destroy({
        where: {email: req.body.email}
    }).then(user => {
        res.send('Successfully deleted user.');
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
    });
};
