import { Router } from "express";
import { createCategoriesController, listAllCategoriesController, listAllRealEstateCategoriesController } from "../controllers/categories.controllers";

const categoriesRoutes:Router = Router()


categoriesRoutes.post('',createCategoriesController)
categoriesRoutes.get('',listAllCategoriesController)
categoriesRoutes.get('/:id/realEstate',listAllRealEstateCategoriesController)
export{categoriesRoutes}
