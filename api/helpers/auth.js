const db = require('../../db/models/index');

function needsAdmin(req, res) {
    db.Role.findOne({
        where: {
            role: 'admin'
        },
        attributes: ['role_token']
    }).then(role => {
        console.log("this is the role.");
        console.log(role);
    }).catch(function (err) {
        res.send("there was an error find a role for that token");
    })
}