import { Response,Request,NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"


const checkIdValidateMiddleware = async (req:Request, res:Response, next:NextFunction)=>{
    const reqId:number=parseInt(req.params.id)
    if(reqId){
            const repositoryId = AppDataSource.getRepository(User)
        const validatedId = await repositoryId.find({
            where: {
                id: reqId,
            },
        })
        // falsy=undefined, null,0
        if( validatedId.length>0){
    
            throw new AppError( "Id already exists", 404);
        }
    
    
    }
    
    return next()
    }
    export default checkIdValidateMiddleware


  