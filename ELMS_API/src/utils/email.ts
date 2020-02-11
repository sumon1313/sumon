import { Request, Response, NextFunction} from "express";
import * as email_val from '../config/forget_pass_config/email_config';
import { getMaxListeners } from "cluster";
import * as jwt from 'jsonwebtoken';
import app from '../config/server/server';

var nodemailer = require('nodemailer');
require('dotenv').config()

export async function sendEmail(req: Request, res: Response, next: NextFunction): Promise <void> {
    const token: string = jwt.sign({ email: req.body.email }, app.get('secret'), {
        expiresIn: '60s'
    });
    nodemailer.createTestAccount((err: Error, account: Response) => {
        let transporter = nodemailer.createTransport({
            service: email_val.email.service, // Gmail Host
            port: email_val.email.port, // Port
            requireTLS: email_val.email.requireTLS,
            secure: email_val.email.secure, // this is true as port is 465
            auth: {
                user: email_val.email.user, //Gmail username
                pass: email_val.email.pass // Gmail password
            },
            debug: email_val.email.debug,
        });
    
        let mailOptions = {
            from: email_val.email.user ,
            to: req.body.email, // Recepient email address. Multiple emails can send separated by commas
            subject: "Hello Rohit", //rohitkanchanshaw95@gmail.com
            html: `<a href = http://localhost:4200/auth/dashboard>Click here for email verify</a>`
        };
     
        transporter.sendMail(mailOptions, (error: Error, info: Response) => {
            if (error) {
                res.json({mess:'Mail not sent'})
                console.log(error);
            }else{
                res.json({mess:'Mail sent'})
                console.log(info);
            }
        });
    });
}
