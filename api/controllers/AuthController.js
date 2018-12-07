const db = require('../../db/models/index');


exports.require_admin = function (req, res, next) {
    db.Role.findOne({
        where: {
            role: 'admin'
        },
        attributes: ['role_token']
    }).then(role => {
        db.User.findOne({
            where: {
                id: req.body.user_id
            },
            attributes: ['role_token']
        }).then(user => {
            console.log(role.dataValues.role_token);
            if (user.role_token !== role.dataValues.role_token) {
                res.status(403);
                res.send("You don't have permission for that");
            }
        }).catch(function (err) {
            res.status(400);
            res.send('Something went wrong... ' + err);
            console.log(err);
            console.log("Error in finding user");
        });
        return true;
    }).catch(function (err) {
        res.status(400);
        res.send('Something went wrong... ' + err);
        console.log(err);
        console.log("Error finding role");
    });
    next();
};
