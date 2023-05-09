import { Request,Response } from "express"
import { RealEstate } from "../entities"

import {  TRealEstateRequest } from "../interfaces/realestate.interface"
import createRealEstateService from "../services/real_estate/createRealEstate.service"
import listAllRealEstateService from "../services/real_estate/listAllRealEstate.service"

const createRealEstateController = async(
    req: Request,
    res:Response
): Promise <Response> =>{
    const realEstateData:TRealEstateRequest = req.body
    const newCategory: RealEstate = await createRealEstateService(realEstateData)
    return res.status(201).json(newCategory)
    
}

const listAllRealEstateController = async(
    req: Request,
    res: Response
): Promise <Response> => {
    const realEstate = Number(req.query.real_estate)
    const listRealEstate: TRealEstateRequest[] = await listAllRealEstateService(realEstate)
    return res.status(200).json(listRealEstate)
}


export{createRealEstateController,listAllRealEstateController}