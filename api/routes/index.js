const express = require('express');
const router = express.Router();

const validate = require('express-validation');
const userValidation = require('./validation/user.js');
const announcementValidation = require('./validation/user.js');
const schoolValidation = require('./validation/user.js');

const announcementController = require('../controllers/AnnouncementController');
const schoolController = require('../controllers/SchoolController');
const userController = require('../controllers/UserController');

router.get('/user/smoke', userController.user_smoke_test_get);

router.post('/user/create', validate(userValidation.create), userController.user_create_post);

router.post('/user/update', validate(userValidation.update), userController.user_update_post);

router.post('/user/delete', validate(userValidation.delete), userController.user_create_post);

router.post('/user/token', validate(userValidation.token), userController.user_create_post);

router.post('/announcement/create', validate(announcementValidation.create), announcementController.announcement_create_post);

router.post('/announcement/update', validate(announcementValidation.update), announcementController.announcement_update_post);

router.post('/announcement/delete', validate(announcementValidation.delete), announcementController.announcement_delete_post);

router.get('/announcement/latest', validate(announcementValidation.latest), announcementController.announcement_latest_get);

router.get('/announcement/all', validate(announcementValidation.latest), announcementController.announcement_all_get);

router.post('/school/create', validate(schoolValidation.create), schoolController.school_create_post);

router.post('/school/update', validate(schoolValidation.update), schoolController.school_update_post);

router.post('/school/delete', validate(schoolValidation.delete), schoolController.school_delete_post);

module.exports = router;
