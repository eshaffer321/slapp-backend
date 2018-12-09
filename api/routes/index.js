const express = require('express');
const router = express.Router();

const db = require('../../db/models/index');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const validate = require('express-validation');
const userValidation = require('./validation/user.js');
const announcementValidation = require('./validation/announcement.js');
const schoolValidation = require('./validation/school.js');
const userschoolValidation = require('./validation/userschool.js');

const announcementController = require('../controllers/AnnouncementController');
const schoolController = require('../controllers/SchoolController');
const userController = require('../controllers/UserController');
const userschoolController = require('../controllers/UserSchoolController');
const authController = require('../controllers/AuthController');

function isAdmin() {
    return function(req, res, next) {
        db.User.findOne({
            where: {
                email: req.body.email
            },
            attributes: ['id']
        }).then(user => {

        }).catch(function (err) {
            res.status(400);
            res.send(err);
        })
    }
}

router.use('/', swaggerUi.serve);

router.get('/', swaggerUi.setup(swaggerDocument));

router.get('/user/:token', userController.user_school_token_get);

router.get('/user/find/:email', userController.user_get);

router.post('/user/create', validate(userValidation.create), userController.user_create_post);

router.post('/user/update', validate(userValidation.update), userController.user_update_post);

router.post('/user/delete', validate(userValidation.delete), userController.user_delete_post);

router.get('/announcement', announcementController.announcement_pinned_get);

router.get('/announcement/all', announcementController.announcement_all_get);

router.post('/announcement/create', [isAdmin(), validate(announcementValidation.create)],  announcementController.announcement_create_post);

router.post('/announcement/update', [isAdmin(), validate(announcementValidation.update)],  announcementController.announcement_update_post);

router.post('/announcement/delete', [isAdmin(), validate(announcementValidation.delete)],  announcementController.announcement_delete_post);

router.post('/announcement/pin', [isAdmin(), validate(announcementValidation.pinned)],  announcementController.announcement_pin_post);

router.post('/announcement/unpin', [isAdmin(), validate(announcementValidation.pinned)],  announcementController.announcement_pin_post);

router.get('/school', schoolController.school_create_post);

router.get('/school/all', schoolController.school_get);

router.post('/school/create', validate(schoolValidation.create), schoolController.school_create_post);

router.post('/school/update', validate(schoolValidation.update), schoolController.school_update_post);

router.post('/school/delete', validate(schoolValidation.delete), schoolController.school_delete_post);

router.post('/userschool/add', validate(userschoolValidation.add), userschoolController.userschool_add_post);

module.exports = router;
