var Joi = require('joi');

const announcement = {};

announcement.create = {
    body: {
        message: Joi.string().required(),
        schoolId: Joi.number().required(),
        userId: Joi.number().required(),
    }
};

announcement.update = {
    body: {
        announcementId: Joi.number().required(),
    }
};

announcement.delete = {
    body: {
        announcementId: Joi.number().required(),
    }
};

announcement.latest = {
    body: {
        userId: Joi.number().required(),
    }
};

module.exports = announcement;