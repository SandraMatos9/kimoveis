import { Response,Request,NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"


const checkEmailValidateMiddleware = async (req:Request, res:Response, next:NextFunction)=>{
    const reqEmail:any=req.body.email
    if(reqEmail){
            const repositoryEmail = AppDataSource.getRepository(User)
        const validatedEmail = await repositoryEmail.find({
            where: {
                email: reqEmail,
            },
        })
        // falsy=undefined, null,0
        if( validatedEmail.length>0){
    
            throw new AppError( "Email already exists", 409);
        }
    
    
    }
    
    return next()
    }
    export default checkEmailValidateMiddleware