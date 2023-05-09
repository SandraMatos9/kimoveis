import { NextFunction,Response,Request } from "express"
import { AppError } from "../error"

const permitionTokenAdminMiddlewate = async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<Response|void>=>{
    const idParams = req.params.id
    const isAdmin =req.body.admin
    const tokenId= req.headers.authorization
console.log(idParams)
// req.route.path=== "/:id/user" && req.method =="PATCH"
    if(req.method =="PATCH"){
        if( isAdmin===false){
            throw new AppError("Insufficient Permission",403)

        }
       }

   if((idParams!=tokenId)  &&   isAdmin===false){
    throw new AppError("Insufficient Permission",403)
   }

   
next()
}
export{permitionTokenAdminMiddlewate}