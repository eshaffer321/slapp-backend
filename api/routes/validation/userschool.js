const Joi = require('joi');
const db = require('../../../db/models/index');

const userchool = {};

userchool.add = {
    body: {
        email: Joi.number().required(),
        school_id: Joi.number().required(),
    }
};

module.exports = userchool;
