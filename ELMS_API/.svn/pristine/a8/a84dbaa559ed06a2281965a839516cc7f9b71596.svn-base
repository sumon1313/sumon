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
//import AuthService from './service';
const error_1 = require("../../config/error");
const jwt = require("jsonwebtoken");
const server_1 = require("../../config/server/server");
const UserService = require("./userService");
function signup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserService.createUser(req.body);
            const token = jwt.sign({ email: user.email }, server_1.default.get('secret'), {
                expiresIn: '60m'
            });
            res.json({
                status: 200,
                logged: true,
                token: token,
                message: 'Sign in successfull'
            });
        }
        catch (error) {
            if (error.code === 500) {
                return next(new error_1.default(error.message.status, error.message));
            }
            res.json({
                status: 400,
                message: error.message
            });
        }
    });
}
exports.signup = signup;
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield UserService.getUserByEmail(req.body.EmailID, req.body.Password);
            if (!user) {
                throw new Error('Invalid password or email');
            }
            const token = jwt.sign({ email: user.EmailID }, server_1.default.get('secret'), {
                expiresIn: '60m'
            });
            res.json({
                status: 200,
                logged: true,
                token: token,
                users: user,
                message: 'Sign in successfull'
            });
        }
        catch (error) {
            if (error.code === 500) {
                return next(new error_1.default(error.message.status, error.message));
            }
            res.json({
                status: 400,
                logged: false,
                message: error.message
            });
        }
    });
}
exports.login = login;
//# sourceMappingURL=userComponent.js.map