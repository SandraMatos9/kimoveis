import { Request,Response, NextFunction } from "express"
import { AppError } from "../error"

const checkAdminMiddleware = ( 
    req: Request, 
    res: Response,
     next: NextFunction
     ): void =>{

    const adminUser= res.locals.admin
    const idParams = parseInt(req.params.id)
    const userId= res.locals.userId

    console.log(req.method)
    console.log(adminUser, userId)
    
    if(req.method ==="PATCH"){
        if( !adminUser && idParams!= userId ){
            throw new AppError("Insufficient permission",403)

        }
        return next()
    }

    if(!adminUser){
        throw new AppError('Insufficient permission',403)
    }
 
  

    return next()

}
export default checkAdminMiddleware