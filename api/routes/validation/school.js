var Joi = require('joi');

const schools = {};

schools.create = {
    body: {
        school_name: Joi.string().required(),
        district: Joi.string().required(),
        hostname: Joi.string().required(),
        token: Joi.string().required(),
        admin_token: Joi.string().required(),
        user_token: Joi.string().required()
    }
};

schools.update = {
    body: {
        school_id: Joi.number().required(),
        school_name: Joi.string(),
        district: Joi.string(),
        hostname: Joi.string(),
    }
};

schools.delete = {
    body: {
        school_id: Joi.number().required(),
    }
};

module.exports = schools;
