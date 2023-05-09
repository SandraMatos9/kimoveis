import { Response,Request,NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Category, RealEstate, User } from "../entities"
import { AppError } from "../error"


const checkRealEstateValidateMiddleware = async (req:Request, res:Response, next:NextFunction)=>{

    const reqRealEstate:RealEstate=req.body.real_estate

    if(reqRealEstate){
            const repositoryRealEstate = AppDataSource.getRepository(RealEstate)
            const validatedRealEstate = await repositoryRealEstate.find({
            where: {
                address: reqRealEstate,
            },
        })
        if( validatedRealEstate.length>0){
    
            throw new AppError( "RealEstate already exists", 409);
        }
    
    }
    
    return next()
    }
    export default checkRealEstateValidateMiddleware