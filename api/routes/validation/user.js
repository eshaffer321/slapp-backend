const Joi = require('joi');

const user = {};

user.create = {
    body: {
        email: Joi.string().email().required(),
        schoolId: Joi.number().required(),
        roleId: Joi.string().required(),
        googleToken: Joi.string().required()
    }
};

user.update = {
    body: {
        userId: Joi.number().required()
    }
};

user.delete = {
    body: {
        userId: Joi.number().required()
    }
};

user.token = {
    body: {
        userId: Joi.number().required()
    }
};

module.exports = user;
