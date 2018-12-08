const db = require('../../db/models/index');

exports.user_get = function (req, res) {
    console.log(req.params);
    db.User.findOne({
        where: {email: req.params.email},
        attributes: ['first_name', 'last_name', 'email', 'id']
    }).then(user => {
        db.UserSchool.findAll({
            where: {
                user_id: user.id
            },
            attributes: ['role', 'school_id'],
            // includes: [{
            //     model: db.School,
            //     attributes: ['school_name', 'district']
            // }]
        }).then(userschool => {
            res.send(userschool);
        }).catch(function (err) {
            res.status(400);
            res.send(err);
        })
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
    });
};

exports.user_token_all_get = function (req, res) {
    db.Role.findAll({}).then(role => {
        res.send(role);
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
    });
};

exports.user_token_get = function (req, res) {
    db.School.findOne({
        where: {}
    }).then(school => {

    }).catch(function (err) {

    });


    db.Role.count({
        where: {role_token: req.params.role_token},
    }).then(count => {
        if (count > 0) {
            db.Role.findOne({
                where: {role_token: req.params.role_token},
                attributes: ['role']
            }).then(role => {
                res.send(role);
            }).catch(function (err) {
                res.status(400);
                res.send('Something went wrong... ' + err);
            });
        } else {
            res.status(400);
            res.send('Couldn\'t find role token');
        }
    }).catch(function (err) {
        res.send(err);
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
                    console.log("else");
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
                    console.log('USERSCHOOL CALLED');
                    if (data) {
                        console.log('admin token found');
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
                        console.log('admin token NOT found');
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
            role_token: req.body.role_token
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
