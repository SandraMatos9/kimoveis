import { NextFunction, Response,Request } from "express";
import jwt from 'jsonwebtoken'
import { AppError } from "../error";
import { config } from "dotenv";
import 'dotenv/config'


const tokenIsValidMiddleware=(
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    let token: string|undefined = req.headers.authorization
    const idParams = req.params.id
    const tokenId= res.locals.tokenId
    const isAdmin = res.locals.tokenAdmin 

    if(!token){
        throw new AppError('Missing bearer token',401)
    }

    token = token.split(" ")[1]
    if(req.route.path=== "/users/:id" && req.method =="PATCH"){
        if( isAdmin === false){
            throw new AppError("Insufficient Permission",403)

        }
       }

   if((idParams!=tokenId)  &&   isAdmin===false){
    throw new AppError("Insufficient Permission",403)
   }

    jwt.verify(token, process.env.SECRET_KEY!, (error:any,decoded:any)=>{
        if(error) throw new AppError(error.message, 401)

        res.locals.userId = decoded.sub
        res.locals.userPermission = decoded.admin

        
        return next()
    })




}
export default tokenIsValidMiddleware