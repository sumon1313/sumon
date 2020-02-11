import * as Joi from 'joi';

class UserValidation {
    customJoi: any;
    constructor() {
    }
   
    
    createUser(params: any): Joi.ValidationResult < any > {
        const schema: Joi.Schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });

        return Joi.validate(params, schema);
    }
    
    getUser(params: any): Joi.ValidationResult < any > {
        const schema: Joi.Schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });

        return Joi.validate(params, schema);
    } 


    removeUser(body: {id: string}): Joi.ValidationResult < { id: string} > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    comparePassword(password1: string, password2: string){
        let status: boolean=false;    
        if(password1 == password2){
            status=true;
            return status;
        }   
    }
}

export default new UserValidation();
