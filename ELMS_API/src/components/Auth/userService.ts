import * as Joi from 'joi';
import * as bcryptjs from 'bcryptjs'
import userValidation from './userValidation';
import db from '../../config/connection/connection';
import conn from '../../config/connection/sql_conn';
import { futimes } from 'fs';
import { any } from 'bluebird';
import { Json } from 'sequelize/types/lib/utils';



export async function createUser(body: any): Promise < any > {
        try {
            const validate: Joi.ValidationResult < any > = userValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: any = {
                email: body.email,
                password: body.password
            };

            let query:any;

            db.query("SELECT * FROM Artists").then((users: any[]) => {
                query= users[0];
                console.log(users[0]);

                // We don't need spread here, since only the results will be returned for select queries
            })
            
            // const query: any = await UserModel.findOne({
            //     email: body.email
            // });

            if (query) {
                throw new Error('This email already exists');
            }

            const saved: any = await user.save();

            return saved;
        } catch (error) {
            throw new Error(error);
        }
    }
    
export async function getUser(body: any): Promise < any > {
        
        let isMatched:boolean;
        try {
            //const validate: Joi.ValidationResult < any > = userValidation.getUser(body);

            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }
            let user: any;
            getUserByEmail(body.EmailID, body.Password).then(
            async (result: any) => {
                    if(result.length){
                        user = result[0]
                        isMatched = userValidation.comparePassword(body.Password, user.Password)
                        if(isMatched){ return Promise.resolve(user); }
                        else{ throw new Error('Invalid password or email'); }
                        
                    }
                    else{
                        throw new Error('Enter a registered email address');
                    }
                })
                .catch((err: any) => {
                    console.log(err)
                })
              
        } catch (error) {
            throw new Error(error);
        }
}

export async function getUserByEmail(email: string, password: string): Promise < any > {
    
    const poolConnect = await db.connect();
    try{
        const result = await poolConnect.request()
            .input('EmailID', email)
            .input('Password', password)
            .execute('SP_MstUserLoginData')
           
        return Promise.resolve(result.recordset[0]);
    }
    catch(e){
        return Promise.reject(e);
    }
    finally{
        poolConnect.close();
    }
}


// export async function loginUser(email: string, password: string): Promise <any> {
//     let resp: any = {};
//     var Pass:any;
//     var json:any = {};
//         try{
//             var pass = bcryptjs.hashSync(password, 10);
//             resp = await conn.query(`select * from tbl_employee where Email = '${email}'`, (err: Error, response: any) =>{
//                 if(err) throw err;
//                 response.forEach((element:any) => {
//                    console.log(element.Password) 
//                 });
//                 Pass = "Sumon"
//                 return Pass;
//             });
//             if(resp){
//                 json.msg = "Welcome to dashboard!";
//                 json.data = resp
//             }
//             // console.log(abc)
//             // if(abc){
//             //      response.msg = "Welcome to dashboard!";
//             // }
//             return json;
            
//         }catch(err){
//             console.log(err);
//         }
// }
    export async function user_reg({email,fname,lname,phone,pass}:any): Promise < any > {
        const resp:any = {};
    
        try{
            const salt=await bcryptjs.genSalt()
            const hashedpassword=await bcryptjs.hashSync(pass,salt)
            // console.log(salt)
            console.log(hashedpassword)

            //password=this.hashedpassword
            var ins = conn.query(`INSERT INTO tbl_employee (Email,FName,LName,PhoneNumber,Password) VALUES ('${email}','${fname}','${lname}',${phone},'${hashedpassword}')`, (err: Error, resp: Response)=>{
                if(err) console.log(err);
            })
            if(ins){
                console.log("Insert")
                resp.mess = "User Registered"
            }else{
                resp.mess = "User not valid"
            }
            return resp;
        }catch(err){

    }
       
       

       
      
}

    export async function pass_upd(password:string, email:string){
        const resp:any = {};
    
        try{
            const salt=await bcryptjs.genSalt()
            const hashedpassword=await bcryptjs.hashSync(password,salt)

            //password=this.hashedpassword
            var upd = conn.query(`update tbl_employee set Password = '${hashedpassword}' where Email = '${email}'`, (err: Error, resp: Response)=>{
                if(err) console.log(err);
            })
            if(upd){
                console.log("Update")
                resp.mess = "Update password"
            }else{
                resp.mess = "Password not update"
            }
            return resp;
        }catch(err){

        }
    }

