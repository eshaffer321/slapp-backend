const Joi = require('joi');
const db = require('../../../db/models/index');

const user = {};

user.get = {
    body: {
        user_id: Joi.string().valid(Joi.ref('$req.params.user_id')).required()
    },
};

user.create = {
    body: {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        school_id: Joi.number().required(),
        role_id: Joi.number().required(),
        refresh_token: Joi.string().required()
    }
};

user.update = {
    body: {
        user_id: Joi.number().required(),
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string().email(),
        role_id: Joi.number(),
        refresh_token: Joi.string()
    }
};

user.delete = {
    body: {
        user_id: Joi.number().required()
    }
};

user.token = {
    body: {
        user_id: Joi.number().required()
    }
};

module.exports = user;
