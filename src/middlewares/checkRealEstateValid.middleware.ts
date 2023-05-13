import { Response,Request,NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Address, Category, RealEstate, User } from "../entities"
import { AppError } from "../error"
import { TREalEstateSchemaNoNumber, TRealEstateSchemaIdRequest, TRealEstateSchemaNoNumberRequest } from "../interfaces/realEstate.interfaces"
import { realEstateSchemaNoNumberRequest } from "../schemas/realEstate.schema"


const checkRealEstateValidateMiddleware = async (req:Request, res:Response, next:NextFunction)=>{

    const reqRealEstate:TRealEstateSchemaIdRequest=req.body.real_estate
    const reqAddress: TRealEstateSchemaNoNumberRequest = req.body.address


    if(reqRealEstate){
            const repositoryRealEstate = AppDataSource.getRepository(RealEstate)
            const repositoryAddress = AppDataSource.getRepository(Address)

            const validatedRealEstate = await repositoryAddress.find({
            where: {
                street:reqAddress.address.street,
                zipCode:reqAddress.address.zipCode,
                city:reqAddress.address.city,
                state:reqAddress.address.state
                
            },
        })
        if( validatedRealEstate.length>0){
    
            throw new AppError( "Address already exists", 409);
        }
    
    }
    
    return next()
    }
    export default checkRealEstateValidateMiddleware