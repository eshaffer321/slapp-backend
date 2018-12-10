const db = require('../../db/models/index');

exports.userschool_add_post = function(req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        },
        attributes: ['id']
    }).then(user => {
        db.UserSchool.create({
            school_id: req.body.school_id,
            user_id: user.id,
            role: 'user'
        }).then(userschool => {
            console.log(userschool);
            res.json('Successfully created added association');
        }).catch(function (err) {
            res.status(400);
            res.json(err);
        })
    }).catch(function (err) {
        res.send(err);
    });

};
