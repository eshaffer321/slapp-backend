var Joi = require('joi');
const db = require('../../../db/models/index');

const announcement = {};

announcement.create = {
    body: {
        message: Joi.string().required(),
        school_id: Joi.number().required(),
        user_id: Joi.number().required(),
    }
};

announcement.update = {
    body: {
        announcement_id: Joi.number().required(),
        user_id: Joi.number().required(),
        message: Joi.string().required()
    }
};

announcement.delete = {
    body: {
        announcement_id: Joi.number().required(),
        user_id: Joi.number().required(),
    }
};

announcement.latest = {
    body: {
        user_id: Joi.number().required(),
    }
};

announcement.pinned = {
    body: {
        announcement_id: Joi.number().required(),
    }
};

module.exports = announcement;