import { Router } from "express";
import { createCategoriesController, listAllCategoriesController, listAllRealEstateCategoriesController } from "../controllers/categories.controllers";
import checkNameValidateMiddleware from "../middlewares/checkNameValidate.middleware";
import checkDataIsValidMiddleware from "../middlewares/checkDataIsValid.middleware";
import { categorieSchemaRequest } from "../schemas/categories.schemas";
import tokenIsValidMiddleware from "../middlewares/tokenIsValid.middleware";
import checkAdminMiddleware from "../middlewares/checkAdmin.middleware";
import checkIdValidateMiddleware from "../middlewares/checkId.middleware";
import checkCategoryExistMiddleware from "../middlewares/checkCategoryExist.middleware";

const categoriesRoutes:Router = Router()


categoriesRoutes.post('',tokenIsValidMiddleware,checkAdminMiddleware,checkDataIsValidMiddleware(categorieSchemaRequest),checkNameValidateMiddleware,createCategoriesController)
categoriesRoutes.get('',listAllCategoriesController)
categoriesRoutes.get('/:id/realEstate',checkCategoryExistMiddleware,listAllRealEstateCategoriesController)
export{categoriesRoutes}
