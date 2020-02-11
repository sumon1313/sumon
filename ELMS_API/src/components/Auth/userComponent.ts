//import AuthService from './service';
import HttpError from '../../config/error';
import * as bcryptjs from 'bcryptjs'
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import app from '../../config/server/server';
import conn from '../../config/connection/sql_conn';
import * as  UserService from './userService';


export async function signup(req: Request, res: Response, next: NextFunction): Promise < void > {
    
    try {
        const user = await UserService.createUser(req.body);
        
        const token: string = jwt.sign({ email: user.email }, app.get('secret'), {
            expiresIn: '60m'
        });
        
        res.json({
            status: 200,
            logged: true,
            token: token,
            message: 'Sign in successfull'
        });
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            message: error.message
        });
    }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise < void > {
    
    try {
        let user = await UserService.getUserByEmail(req.body.EmailID, req.body.Password);
        
        if(!user){
            throw new Error('Invalid password or email'); 
        }
        const token: string = jwt.sign({ email: user.EmailID }, app.get('secret'), {
            expiresIn: '60m'
        });
        
        res.json({
            status: 200,
            logged: true,
            token: token,
            users:user,
            message: 'Sign in successfull'
        });
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            logged: false,
            message: error.message
        });
    }
}

export async function login_login(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        //var pass = bcryptjs.hashSync(req.body.Password, 10);
            await conn.query(`select * from tbl_employee where Email = '${req.body.EmailID}'`, (err: Error, response: any) =>{
                if(err) throw err;
                const token: string = jwt.sign({ email: req.body.EmailID }, app.get('secret'), {
                    expiresIn: '60s'
                });
                response.forEach((element:any) => {
                    //console.log(bcryptjs.compareSync(req.body.Password,element.Password))
                   if(bcryptjs.compareSync(req.body.Password,element.Password)){
                        res.json({data: "You are Successfully Login", token:token});
                        //console.log(bcryptjs.compareSync(req.body.Password,element.Password))
                   }else{
                       res.json("You are not Registered")
                   }
                });
            });
            // console.log(abc)
            // if(abc){
            //      response.msg = "Welcome to dashboard!";
            // }
        
        // const token: string = jwt.sign({ email: user.EmailID }, app.get('secret'), {
        //     expiresIn: '60m'
        // });
        
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            logged: false,
            message: error.message
        });
    }
}
export async function user_signup(req: Request, res: Response, next: NextFunction): Promise < void > {
    //const resp: any = {};
    try {
         //const {UserName, FirstName, LastName, PhoneNumber, Password} = req.body;
         //console.log(email+' '+pass);
        const user = await UserService.user_reg(req.body);
        //console.log(user)
        //mail sent
        // nodemailer.createTestAccount((err: Error) => {
        //     let transporter = nodemailer.createTransport({
        //         service: email_val.email.service, // Gmail Host
        //         port: email_val.email.port, // Port
        //         requireTLS: email_val.email.requireTLS,
        //         secure: email_val.email.secure, // this is true as port is 465
        //         auth: {
        //             user: email_val.email.user, //Gmail username
        //             pass: email_val.email.pass // Gmail password
        //         },
        //         debug: email_val.email.debug,
        //     });
         
        //     let mailOptions = {
        //         from: email_val.email.user ,
        //         to: user_name, // Recepient email address. Multiple emails can send separated by commas
        //         subject: "Hello Rohit", //rohitkanchanshaw95@gmail.com
        //         text: "xyz.myFunction"
        //     };
         
        //     transporter.sendMail(mailOptions, (error: Error, info: Response) => {
        //         if (error) {
        //             resp.data = "Mail not sent"
        //             console.log(error);
        //         }else{
        //             //res.json({mess:'Mail sent'})
        //             resp.data = "Mail sent"
        //             console.log(info);
        //         }
        //     });
        // });
        
        // const token: string = jwt.sign({ email: user.email }, app.get('secret'), {
        //     expiresIn: '60m'
        // });
        if(user.mess == "User Registered"){
            res.json({
                status: 200,
                logged: true,
                users: user,
                message: 'Sign in successfull'
            });
        }else if(user.mess == "User not valid"){
            res.json({
                status: 404,
                logged: false,
                users: user,
                message: 'User not Registered'
            });
        }
        } catch (error) {
            // if (error.code === 500) {
            //     return next(new HttpError(error.message.status, error.message));
            // }
            res.json({
                status: 400,
                message: error.message,
                mess: "error show"
            });
        }
}

export async function update_pass(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const user = await UserService.pass_upd(req.body.confirm_password ,req.body.email_upd);
        
        if(user.mess == "Update password"){
            res.json("Password Updated");
        }else if(user.mess == "Password not update"){
            res.json({
                status: 404,
                logged: false,
                users: user,
                message: 'Your password not updated'
            });
        }
        } catch (error) {
            // if (error.code === 500) {
            //     return next(new HttpError(error.message.status, error.message));
            // }
            res.json({
                status: 400,
                message: error.message,
                mess: "error show"
            });
        }
}