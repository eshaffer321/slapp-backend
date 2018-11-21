const db = require('../../db/models/index')

exports.announcement_create_post = function (req, res) {

};

exports.announcement_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: ');
};

exports.announcement_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: ');
};

exports.announcement_latest_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

exports.announcement_all_get = function (req, res) {
    db.Announcement.findAll().then(announcements => res.json(announcements))
};