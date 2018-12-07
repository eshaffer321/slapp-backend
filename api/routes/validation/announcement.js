var Joi = require('joi');
const db = require('../../../db/models/index');

const announcement = {};

announcement.create = {
    body: {
        message: Joi.string().required(),
        school_id: Joi.number().required(),
        google_id: Joi.string().required(),
    }
};

announcement.update = {
    body: {
        announcement_id: Joi.number().required(),
        google_id: Joi.string().required(),
        message: Joi.string().required()
    }
};

announcement.delete = {
    body: {
        announcement_id: Joi.number().required(),
        google_id: Joi.string().required(),
    }
};

announcement.latest = {
    body: {
        google_id: Joi.string().required(),
    }
};

announcement.pinned = {
    body: {
        announcement_id: Joi.number().required(),
    }
};

module.exports = announcement;
