import { Request,Response } from "express"
import { Category } from "../entities"

import { TCategoryRequest } from "../interfaces/categories.interface"
import createCategoryServices from "../services/categories/createCategory.services"
import listAllCategoriesService from "../services/categories/listAllCategories.services"
import listAllRealEstateCategoriesService from "../services/categories/listAllRealEstateCategories.service."


const createCategoriesController = async(
    req: Request,
    res:Response
): Promise <Response> =>{
    const categoryData:TCategoryRequest = req.body
    const newCategory: Category = await createCategoryServices(categoryData)
    return res.status(201).json(newCategory)
    
}

const listAllCategoriesController = async(
    req: Request,
    res: Response
): Promise <Response> => {
    const categories = await listAllCategoriesService()
    return res.json(categories)
}

const listAllRealEstateCategoriesController = async(
    req: Request,
    res: Response
): Promise <Response> =>{
    const categoryId:number = parseInt(req.params.id)
    const categoriesRealEstate = await listAllRealEstateCategoriesService(categoryId)
    return res.json(categoriesRealEstate)
}

export {createCategoriesController,listAllCategoriesController,listAllRealEstateCategoriesController}