const db = require('../../db/models/index');

// TODO: add authentication
exports.announcement_create_post = function (req, res) {
    db.Announcement.create({
        message: req.body.message,
        user_id: req.body.user_id,
        school_id: req.body.school_id,
        updated_at: null
    }).then(announcement => {
        res.status = 200;
        res.send('Your announcement has successfully been created.');
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
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
        }).catch(function(err) {
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
    }).catch(function(err) {
        res.status = 400;
        res.send('Something went wrong...' + err);
    });
};

exports.announcement_latest_post = function (req, res) {
    // if (!userValidation.exists(req.body.user_id)) {
    //     res.status(400);
    //     res.send('User not found.');
    // }
};

/**
 * First validate user exists, then make sure user has a school associated to it.
 * Next return all announcement that a user is associated with
 * @param req
 * @param res
 */
exports.announcement_all_post = function (req, res) {
    db.User.count({where: {id: req.body.user_id}}).then(count => {
        if (count === 0) {
            res.status(400);
            res.send('User not found');
        }
        db.UserSchool.count({where: {user_id: req.body.user_id}}).then(count => {
            if (count === 0) {
                res.status(400);
                res.send('No schools associated with that user');
            }
        });
    }).catch(function (err) {
        res.send('Something went wrong...' + err);
    });

    db.User.findAll({
        where: {id: req.body.user_id},
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