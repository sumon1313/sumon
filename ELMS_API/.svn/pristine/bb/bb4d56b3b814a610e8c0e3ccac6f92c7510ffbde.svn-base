"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userValidation_1 = require("./userValidation");
const connection_1 = require("../../config/connection/connection");
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = userValidation_1.default.createUser(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const user = {
                email: body.email,
                password: body.password
            };
            let query;
            connection_1.default.query("SELECT * FROM Artists").then((users) => {
                query = users[0];
                console.log(users[0]);
                // We don't need spread here, since only the results will be returned for select queries
            });
            // const query: any = await UserModel.findOne({
            //     email: body.email
            // });
            if (query) {
                throw new Error('This email already exists');
            }
            const saved = yield user.save();
            return saved;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createUser = createUser;
function getUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        let isMatched;
        try {
            //const validate: Joi.ValidationResult < any > = userValidation.getUser(body);
            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }
            let user;
            getUserByEmail(body.EmailID, body.Password).then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.length) {
                    user = result[0];
                    isMatched = userValidation_1.default.comparePassword(body.Password, user.Password);
                    if (isMatched) {
                        return Promise.resolve(user);
                    }
                    else {
                        throw new Error('Invalid password or email');
                    }
                }
                else {
                    throw new Error('Enter a registered email address');
                }
            }))
                .catch((err) => {
                console.log(err);
            });
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getUser = getUser;
function getUserByEmail(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const poolConnect = yield connection_1.default.connect();
        try {
            const result = yield poolConnect.request()
                .input('EmailID', email)
                .input('Password', password)
                .execute('SP_MstUserLoginData');
            return Promise.resolve(result.recordset[0]);
        }
        catch (e) {
            return Promise.reject(e);
        }
        finally {
            poolConnect.close();
        }
    });
}
exports.getUserByEmail = getUserByEmail;
//# sourceMappingURL=userService.js.map