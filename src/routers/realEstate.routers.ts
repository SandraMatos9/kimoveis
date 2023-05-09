import { Router } from "express";
import checkRealEstateValidateMiddleware from "../middlewares/checkRealEstateValid.middleware";
import { createRealEstateController } from "../controllers/realEstate.controllers";
import checkAdminMiddleware from "../middlewares/checkAdmin.middleware";

const realEstateRoutes:Router = Router()

realEstateRoutes.post('',checkAdminMiddleware,checkRealEstateValidateMiddleware,createRealEstateController)
realEstateRoutes.get('')

export{realEstateRoutes}