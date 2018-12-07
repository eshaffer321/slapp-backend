const Joi = require('joi');
const db = require('../../../db/models/index');

const user = {};

user.get = {
    body: {
        email: Joi.string().valid(Joi.ref('$req.params.email')).required()
    },
};

user.create = {
    body: {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        school_id: Joi.number().required(),
        role_token: Joi.string().required(),
    }
};

user.update = {
    body: {
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string().email().required(),
        role_token: Joi.string(),
    }
};

user.delete = {
    body: {
        email: Joi.string().email().required(),
    }
};

user.token = {
    body: {
        email: Joi.string().email().required()
    }
};

module.exports = user;
