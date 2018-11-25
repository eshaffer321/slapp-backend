const db = require('../../db/models/index');

exports.userschool_add_post = function(req, res) {
    db.UserSchool.create({
        school_name: req.body.school_name,
        user_id: req.body.user_id,
    }).then(userschool => {
        res.json('Successfully created added association');
    }).catch(function (err) {
        res.status(400);
        res.json(err);
    })
};
