import { Request,Response } from "express";
import { TLogin, TLoginRequest } from "../interfaces/login.interfaces";
import createLoginService from "../services/users/login/createToken.services";


const createLoginController = async(
    req: Request,
    res:Response
):Promise <Response> =>{
    const loginData: TLogin = req.body
    const token = await createLoginService(loginData)
    return res.json({token})
}

export {createLoginController}