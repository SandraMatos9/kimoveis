import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";
import { TUser } from "../interfaces/users.interfaces copy";
import { Repository } from "typeorm";

const checkCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const userRepository:Repository<User>=AppDataSource.getRepository(User)


    const {id} =req.params
    const foundUser:TUser|null = await userRepository.findOneBy({id:Number(id)})

    if(!foundUser){
        throw new AppError ("Category not found",404)
    }
    res.locals.foundUser=foundUser
    return next()



};
export default checkCategoryExistMiddleware;
