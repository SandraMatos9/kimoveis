import { Request,Response } from "express";
import { TLogin, TLoginRequest } from "../interfaces/login.interfaces";
import createTokenService from "../services/users/login/createToken.services";


const createTokenController = async(
    req: Request,
    res:Response
):Promise <Response> =>{
    const loginData: TLogin = req.body
    const token = await createTokenService(loginData)
    return res.json({token})
}

export {createTokenController}