import { Request,Response, NextFunction } from "express"
import { AppError } from "../error"

const checkAdminMiddleware = ( 
    req: Request, 
    res: Response,
     next: Function
     ): void =>{

    const adminUser= res.locals.userPermission
    
    if(!adminUser){
        throw new AppError('Insufficient permission',403)
    }

    return next()

}
export default checkAdminMiddleware