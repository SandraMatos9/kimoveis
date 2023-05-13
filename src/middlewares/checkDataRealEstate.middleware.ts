import { NextFunction, Request, Response } from "express";
import { ZodTypeAny} from 'zod'
import { TRealEstateSchemaNoNumberRequest, TREalEstateSchemaNoNumber } from "../interfaces/realEstate.interfaces";

const checkDataRealEstateIsValidMiddleware=
(schema:ZodTypeAny) =>
(req:Request, res:Response, next:NextFunction) =>{
    console.log(req.body)
    const validatedData:TRealEstateSchemaNoNumberRequest = schema.parse(req.body)
    req.body = validatedData
    return next()
}
export default checkDataRealEstateIsValidMiddleware