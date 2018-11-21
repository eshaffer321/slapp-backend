var Joi = require('joi');

const schools = {};

schools.create = {
    body: {
        name: Joi.string().required(),
        district: Joi.string().required(),
        hostname: Joi.string().required(),
        token: Joi.string().required()
    }
};

schools.update = {
    body: {
        schoolId: Joi.number().required(),
    }
};

schools.delete = {
    body: {
        schoolId: Joi.number().required(),
    }
};

module.exports = schools;
