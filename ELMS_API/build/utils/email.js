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
var nodemailer = require('nodemailer');
require('dotenv').config();
function sendEmail(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                port: 25,
                requireTLS: true,
                secure: true,
                auth: {
                    user: 'sroy4828@gmail.com',
                    pass: '13121997' // Gmail password
                },
                debug: true,
            });
            let mailOptions = {
                from: 'sroy4828@gmail.com',
                to: req.body.emailFormControl,
                subject: "Hello Rohit",
                text: ""
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.json({ mess: 'Mail not sent' });
                    console.log(error);
                }
                else {
                    res.json({ mess: 'Mail sent' });
                    console.log(info);
                }
            });
        });
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map