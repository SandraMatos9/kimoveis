import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Category, User } from "../entities";
import { AppError } from "../error";
import { TUser } from "../interfaces/users.interfaces copy";
import { Repository } from "typeorm";
import { TCategory } from "../interfaces/categories.interfaces";

const checkCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const categoryRepository:Repository<Category>=AppDataSource.getRepository(Category)


    const {id} =req.params
    const foundCategory:TCategory|null = await categoryRepository.findOneBy({id:Number(id)})

    if(!foundCategory){
        throw new AppError ("Category not found",404)
    }
    res.locals.foundCategory=foundCategory
    return next()



};
export default checkCategoryExistMiddleware;
