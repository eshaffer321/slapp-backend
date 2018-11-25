const express = require('express');
const router = express.Router();

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

router.use('/', swaggerUi.serve);

router.get('/', swaggerUi.setup(swaggerDocument));

router.get('/user/:user_id', validate(userValidation.get), userController.user_get);

router.get('/user/smoke', userController.user_smoke_test_get);

router.post('/user/create', validate(userValidation.create), userController.user_create_post);

router.post('/user/update', validate(userValidation.update), userController.user_update_post);

router.post('/user/delete', validate(userValidation.delete), userController.user_create_post);

router.get('/user/token', validate(userValidation.token), userController.user_create_post);

router.post('/announcement/create', validate(announcementValidation.create), announcementController.announcement_create_post);

router.post('/announcement/update', validate(announcementValidation.update), announcementController.announcement_update_post);

router.post('/announcement/delete', validate(announcementValidation.delete), announcementController.announcement_delete_post);

router.post('/announcement/latest', validate(announcementValidation.latest), announcementController.announcement_latest_post);

router.post('/announcement/all', validate(announcementValidation.latest), announcementController.announcement_all_post);

router.post('/school/create', validate(schoolValidation.create), schoolController.school_create_post);

router.post('/school/update', validate(schoolValidation.update), schoolController.school_update_post);

router.post('/school/delete', validate(schoolValidation.delete), schoolController.school_delete_post);

router.post('/userschool/add', validate(userschoolValidation.add), userschoolController.userschool_add_post);

module.exports = router;
