import { Response,Request,NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Category, User } from "../entities"
import { AppError } from "../error"


const checkNameValidateMiddleware = async (req:Request, res:Response, next:NextFunction)=>{

    const reqName:any=req.body.name

    if(reqName){
            const repositoryName = AppDataSource.getRepository(Category)
            const validatedName = await repositoryName.find({
            where: {
                name: reqName,
            },
        })
        if( validatedName.length>0){
    
            throw new AppError( "Category already exists", 409);
        }
    
    }
    
    return next()
    }
    export default checkNameValidateMiddleware