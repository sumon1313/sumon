"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
class UserValidation {
    constructor() {
    }
    createUser(params) {
        const schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });
        return Joi.validate(params, schema);
    }
    getUser(params) {
        const schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });
        return Joi.validate(params, schema);
    }
    removeUser(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return Joi.validate(body, schema);
    }
    comparePassword(password1, password2) {
        let status = false;
        if (password1 == password2) {
            status = true;
            return status;
        }
    }
}
exports.default = new UserValidation();
//# sourceMappingURL=userValidation.js.map