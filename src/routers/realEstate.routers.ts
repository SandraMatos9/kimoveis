import { Router } from "express";
import checkRealEstateValidateMiddleware from "../middlewares/checkRealEstateValid.middleware";
import { createRealEstateController, listAllRealEstateController } from "../controllers/realEstate.controllers";
import checkAdminMiddleware from "../middlewares/checkAdmin.middleware";
import {
  realEstateSchema,
  realEstateSchemaNoNumberAddress,
  realEstateSchemaNoNumberRequest,
  realEstateSchemaRequest,
} from "../schemas/realEstate.schema";
import tokenIsValidMiddleware from "../middlewares/tokenIsValid.middleware";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import checkCategoryExistMiddleware from "../middlewares/checkCategoryExist.middleware";
import checkDataRealEstateIsValidMiddleware from "../middlewares/checkDataRealEstate.middleware";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  tokenIsValidMiddleware,
  checkAdminMiddleware,
  checkDataRealEstateIsValidMiddleware(realEstateSchemaNoNumberRequest),
  checkRealEstateValidateMiddleware,
  createRealEstateController
);
realEstateRoutes.get("",listAllRealEstateController);

export { realEstateRoutes };
